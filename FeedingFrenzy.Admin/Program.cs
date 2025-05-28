using BasicUtilities;
using FeedingFrenzy.Admin;
using FeedingFrenzy.Admin.Business;
using FeedingFrenzy.Admin.Middelware;
using FeedingFrenzy.Common;
using FeedingFrenzy.Messaging;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.SqlServer.Management.Smo;
using Microsoft.SqlServer.Management.Common;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Http;
using RooTrax.Common;
using System.Reflection;
using WebAppUtilities;
using System.Data.SqlClient;

public class Program
{
    public static async Task Main(string[] args)
    {
        // Initial configuration has to run before loading appsettings.json
        if (IsInitialConfiguration(args))
        {
            ProcessCommands(args);
            return;
        }
        var builder = WebApplication.CreateBuilder(args);

        var configurationBuilder = new ConfigurationBuilder();
        configurationBuilder.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
        var config = configurationBuilder.Build();

        BasicUtilities.Settings.SetAppSettings(config);
        ConfigureLogs(config);
        SetConnectionString(config);
        ConfigureRooTraxState(config);


        if (args.Length > 0)
        {
            ProcessCommands(args);
            return;
        }

        Logs.DebugLog.WriteEvent("Starting FeedingFrenzy.Admin", "");

        // Add services to the container.
        builder.Services.AddHttpContextAccessor();
        builder.Services.AddRazorPages();

        builder.Services.AddSignalR();
        // Register the RewriteOptionsService
        builder.Services.AddSingleton<RewriteOptionsService>();

        builder.Services.AddSession(options =>
        {
            options.IdleTimeout = TimeSpan.FromMinutes(360);
            options.Cookie.HttpOnly = true;
            options.Cookie.IsEssential = true;
        });

        builder.Services.AddControllers();

        // Add CORS services
        builder.Services.AddCors();


        builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                    .AddCookie(options =>
                    {
                        options.LoginPath = "/login";
                        options.ExpireTimeSpan = TimeSpan.FromMinutes(360);

                        // For API requests, don't redirect, return 401 Unauthorized
                        options.Events = new CookieAuthenticationEvents
                        {
                            OnRedirectToLogin = context =>
                            {
                                if (context.Request.Path.StartsWithSegments("/api"))
                                {
                                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                                    return Task.CompletedTask;
                                }

								// Retrieve the original URL (friendly URL) stored in HttpContext.Items
								var originalUrl = context.HttpContext.Items["OriginalUrl"]?.ToString() ?? string.Empty;

                                if (!StringUtil.IsEmpty(originalUrl))
                                {
                                    // Redirect with the friendly ReturnUrl
                                    var loginUrl = $"{options.LoginPath}?ReturnUrl={Uri.EscapeDataString(originalUrl)}";
                                    if (context.Request.QueryString.Value.ToLower().Contains("output"))
                                    {
                                        context.Response.Redirect(loginUrl);
                                    }
                                    else
                                        context.Response.Redirect(context.RedirectUri);
                                }
                                else
                                    context.Response.Redirect(context.RedirectUri);

                                return Task.CompletedTask;
                            },
                            OnRedirectToAccessDenied = context =>
                            {
                                if (context.Request.Path.StartsWithSegments("/api"))
                                {
                                    context.Response.StatusCode = StatusCodes.Status403Forbidden;
                                    return Task.CompletedTask;
                                }

                                context.Response.Redirect(context.RedirectUri);
                                return Task.CompletedTask;
                            }
                        };
                    });

        builder.Services.AddDistributedMemoryCache();

        // Register AutoMapper with your mapping profiles
        builder.Services.AddAutoMapper(typeof(MappingProfile));

		//Register SemDB services
		//    builder.Services.AddScoped<IFragmentsService, FragmentsService>();

		var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {

            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseExceptionHandler("/Error");

        app.UseStatusCodePages(async context =>
        {
            if (context.HttpContext.Response.StatusCode == StatusCodes.Status400BadRequest)
            {
                context.HttpContext.Response.Redirect("/BadRequest");
            }
        });

        try
        {
            JsonWsOptions jsonWsOptions = config.GetSection("JsonWs").Get<JsonWsOptions>() ?? new JsonWsOptions();
            string strJsonWsRoot = config.GetSection("JsonWs:JsonWsRoot").Value ?? throw new Exception("appSettings:JsonWs:JsonWsRoot is null");

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseMiddleware<CaptureOriginalUrlMiddleware>();

            var rewriteService = app.Services.GetRequiredService<RewriteOptionsService>();
            rewriteService.AddRewriteRules();
            app.UseRewriter(rewriteService.Options);

            app.MapWhen(context => context.Request.Path.StartsWithSegments("/api"), appBuilder =>
            {
                appBuilder.UseRouting();
                // Apply CORS policy for any origin on the /api/ paths
                appBuilder.UseCors(policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });


                appBuilder.UseMiddleware<ApiKeyMiddleware>();


                appBuilder.UseEndpoints(endpoints =>
                {
                    // Map all /api routes
                    MapAPIs(endpoints, jsonWsOptions, strJsonWsRoot);

                });

            });
			app.MapHub<NotificationsHub>("/notifications");

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapRazorPages();




			//For retrieving the IP Address
			app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });



            //These need to be after the authentication stuff
            MapJsonWs(app, jsonWsOptions, strJsonWsRoot);


            app.UseSession();



            app.UseMiddleware<SessionExpirationMiddleware>();

            app.UseWebSockets();
            app.UseMiddleware<FeedingFrenzy.Admin.Business.VoiceAgents.TwilioWebSocketConnection>();

            Initializer.Initialize();

            app.MapControllers();

            //// Initialize FragmentsHelper with IFragmentsService
            //using (var scope = app.Services.CreateScope())
            //{
            //    var service = scope.ServiceProvider.GetRequiredService<IFragmentsService>();
            //    FragmentsHelper.Initialize(service);
            //}


            app.Run();
        }
        catch (Exception err)
        {
            Logs.LogError(err);
        }
    }

    private static void MapJsonWs(WebApplication app, JsonWsOptions jsonWsOptions, string strJsonWsRoot)
    {
        foreach (string strFile in Directory.GetFiles(strJsonWsRoot, "*.ashx"))
        {
            string strContents = FileUtil.ReadFile(strFile);
            string strFileName = StringUtil.RightOfLast(strFile, "\\");

            JsonObject jsonObject = new JsonObject(strContents);

            string strAssembly = jsonObject.GetStringOrNull("Assembly") ?? throw new Exception("Assembly not specified in : " + strFile);
            string strType = jsonObject.GetStringOrNull("Type") ?? throw new Exception("Type not specified in : " + strFile);

            Assembly assembly = AssemblyManager.Load(strAssembly);
            Type type = assembly.GetType(strType) ?? throw new Exception("Could not get Type: " + strType + " from assembly " + strAssembly);



			// Map non-API routes
			app.Map("/JsonWs/" + strFileName, async (HttpContext context) =>
			{
				// Use ActivatorUtilities to create the instance with DI support
				object? obj = ActivatorUtilities.CreateInstance(app.Services, type);
				if (obj == null)
					throw new Exception("Could not create instance of " + strType);

				JsonWs jsonWs = (JsonWs)obj;
				jsonWs.SetOptions(jsonWsOptions);
				await jsonWs.ProcessRequestAsync(context);
			}).RequireAuthorization(); // Require authorization for non-API routes
        }
    }

    private static void MapAPIs(IEndpointRouteBuilder endpoints, JsonWsOptions jsonWsOptions, string strJsonWsRoot)
    {
        foreach (string strFile in Directory.GetFiles(strJsonWsRoot, "*.ashx"))
        {
            string strContents = FileUtil.ReadFile(strFile);

            JsonObject jsonObject = new JsonObject(strContents);

            string strAssembly = jsonObject.GetStringOrNull("Assembly") ?? throw new Exception("Assembly not specified in : " + strFile);
            string strType = jsonObject.GetStringOrNull("Type") ?? throw new Exception("Type not specified in : " + strFile);

            Assembly assembly = AssemblyManager.Load(strAssembly);
            Type type = assembly.GetType(strType) ?? throw new Exception("Could not get Type: " + strType + " from assembly " + strAssembly);

            // Use ActivatorUtilities to create the instance with DI support
            object? obj = ActivatorUtilities.CreateInstance(endpoints.ServiceProvider, type);
            if (obj == null)
                throw new Exception("Could not create instance of " + strType);

            JsonWs jsonWs = (JsonWs)obj;
            jsonWs.SetOptions(jsonWsOptions);

            // Map API routes
            foreach (MethodInfo method in type.GetMethods(BindingFlags.Public | BindingFlags.Static))
            {
                string strUrl = "/api/" + type.Namespace.ToString().ToLower() + "/" + GetUrlSafeName(type.Name) + "/" + GetUrlSafeName(method.Name);
                // Map the API route with authorization
                endpoints.Map(strUrl, async (HttpContext context) =>
                {
                    await jsonWs.ProcessAPIRequestAsync(context, method);
                }); // Require authorization for API routes
            }
        }
    }

    static private string GetUrlSafeName(string strName)
    {
        return string.Join("-", StringUtil.SplitUppercaseWords(strName).Select(x => x.ToLower()).ToArray());
    }

    private static void ConfigureRooTraxState(IConfigurationRoot config)
    {
        RooTraxStateSettings? rooTraxStateSettings = config.GetSection("RooTraxStateSettings").Get<RooTraxStateSettings>();
        if (null == rooTraxStateSettings)
            throw new Exception("Could not load configuration: RooTraxStateSettings");

        FeedingFrenzy.Admin.UI.RooTraxState.Configure(rooTraxStateSettings);
        RooTrax.Common.RooTraxState.Configure(rooTraxStateSettings);
    }

    private static void ProcessCommands(string[] args)
    {
        try
        {
            switch (args[0].ToLower())
            {
                case "setup-features":
                    if (args.Length < 3)
                        throw new Exception("Usage: FeedingFrenzy.Admin setup-features OrganizationName Handle");

                    Provisioning.SetupFeatures(args[1], args[2]);
                    return;

                case "add-administrator":
                    if (args.Length < 2)
                        throw new Exception("Usage: FeedingFrenzy.Admin add-administrator Email");

                    Provisioning.AddAdministrator(args[1]);
                    return;
                case "--init-config":
                    RunInitialConfiguration(args);
                    return;
                default:
                    throw new Exception("Unknown command: " + args[0]);
            }
        }
        catch (Exception err)
        {
            Console.WriteLine(err.Message);
            Logs.LogError(err);
        }
    }

    private static void ConfigureLogs(IConfigurationRoot config)
    {
        Logs.LogSettings? logSettings = config.GetSection("LogSettings").Get<Logs.LogSettings>();
        if (null == logSettings)
            throw new Exception("Could not load configuration: LogSettings");

        Logs.Config(logSettings);
    }

    private static void SetConnectionString(IConfigurationRoot config)
    {
        string? strConnect = config.GetConnectionString("FeedingFrenzy.readwrite");
        if (null == strConnect)
            throw new Exception("FeedingFrenzy.readwrite is null");

        FeedingFrenzy.Data.DataAccess.SetConnectionString(strConnect);

        string? strBuffalyConnect = config.GetConnectionString("buffaly.readwrite");
        if (null == strBuffalyConnect)
            throw new Exception("Buffaly.readwrite is null");

        Buffaly.Data.DataAccess.SetConnectionString(strBuffalyConnect);

        Buffaly.SemanticDB.Data.DataAccess.SetConnectionString(config.GetConnectionString("buffaly_semanticdb.readwrite") ?? throw new Exception("buffaly_semantidb.readwrite is null"));
        Buffaly.Data.DataAccess.SetConnectionString(config.GetConnectionString("buffaly.readwrite") ?? throw new Exception("buffaly.readwrite is null"));
    }

    private static bool IsInitialConfiguration(string[] args)
    {
        if (args.Length > 0 && args[0] == "--init-config")
        {
            if (args.Length < 2)
            {
                Console.WriteLine("Usage (Windows Auth): --init-config <server>");
                Console.WriteLine("Usage (SQL Auth): --init-config <server> <username> <password>");
                throw new Exception("Missing parameters in command: " + args[0]);
            }
            return true;
        }
        else
        {
            return false;
        }
    }

    private static void EnsureAppSettingsExists()
    {
        string templatePath = "appsettings-template.json";
        string configPath = "appsettings.json";

        if (!File.Exists(templatePath))
        {
            throw new Exception($"Error: Configuration template file '{templatePath}' not found. Cannot create '{configPath}'.");
        }

        if (!File.Exists(configPath))
        {
            Console.WriteLine($"Creating 'appsettings.json'...");
            File.Copy(templatePath, configPath);
        }
        else
        {
            Console.Write("A previous configuration exists. Would you like to clear your existing configuration and restart the setup process? (yes/no): ");
            string? response = Console.ReadLine()?.Trim().ToLower();

            if (response == "yes" || response == "y")
            {
                Console.WriteLine($"Overwriting 'appsettings.json' from '{templatePath}'...");
                File.Copy(templatePath, configPath, true);
            }
            else
            {
                throw new Exception("Initial configuration cancelled");
            }
        }
    }

    private static void RunInitialConfiguration(string[] args)
    {
        string server = args[1];
        string? username = args.Length > 2 ? args[2] : null;
        string? password = args.Length > 3 ? args[3] : null;

        Console.WriteLine("Initializing configuration...");

        string connectionStringWithoutInitialCatalog = username == null
            ? $"Server={server};Integrated Security=True;Encrypt=False;"
            : $"Server={server};Database=master;User Id={username};Password={password};Encrypt=False;";

        string connectionStringMaster = $"{connectionStringWithoutInitialCatalog}Database=master;";

        String[] databases = { "feedingfrenzy", "buffaly", "buffaly_semanticdb" };

        Console.WriteLine("Checking if there is a previous configuration...");
        EnsureAppSettingsExists();

        CreateDatabase(connectionStringMaster, databases);
        Console.WriteLine("Databases created successfully.");
        ExecuteSqlScripts(connectionStringMaster, databases);
        Console.WriteLine("All scripts executed successfully");
        UpdateAppSettings(connectionStringWithoutInitialCatalog);
        Console.WriteLine("App settings file updated successfully");

    }

    private static bool CreateDatabase(string masterConnectionString, string[] databaseNames)
    {
        try
        {
            using (SqlConnection connection = new SqlConnection(masterConnectionString))
            {
                connection.Open();

                foreach (var databaseName in databaseNames)
                {
                    string createDbQuery = $"IF EXISTS (SELECT name FROM sys.databases WHERE name = '{databaseName}') BEGIN DROP DATABASE {databaseName} END CREATE DATABASE {databaseName};";

                    using (SqlCommand command = new SqlCommand(createDbQuery, connection))
                    {
                        command.ExecuteNonQuery();
                    }
                }
            }
            return true;
        }
        catch (Exception ex)
        {
            throw new Exception($"Error creating database: {ex.Message}");
        }
    }

    private static void ExecuteSqlScripts(string masterConnectionString, string[] databaseNames)
    {
        try
        {
            string scriptsPath = "initial_scripts\\";
            if (Directory.Exists(scriptsPath))
            {
                foreach (var databaseName in databaseNames)
                {
                    string dbConnectionString = masterConnectionString.Replace("Database=master", $"Database={databaseName}");
                    using (Microsoft.Data.SqlClient.SqlConnection connection = new Microsoft.Data.SqlClient.SqlConnection(dbConnectionString))
                    {
                        string file = scriptsPath + databaseName + ".sql";
                        string script = File.ReadAllText(file);
                        Server server = new Server(new ServerConnection(connection));
                        server.ConnectionContext.ExecuteNonQuery(script);
                        Console.WriteLine($"Executed script: {file}");
                    }
                }
            }
            else
            {
                throw new Exception("No SQL scripts directory found.");
            }
        }
        catch (Exception ex)
        {
            throw new Exception($"Error executing SQL scripts: {ex.Message}");
        }
    }

    private static void UpdateAppSettings(string connectionStringWithoutCatalog)
    {
        try
        {
            string configPath = "appsettings.json";

            if (!File.Exists(configPath))
            {
                throw new Exception("Error: appsettings.json not found.");
            }

            string jsonText = File.ReadAllText(configPath);
            System.Text.Json.Nodes.JsonNode? root = System.Text.Json.Nodes.JsonNode.Parse(jsonText);

            if (root == null || root["ConnectionStrings"] == null)
            {
                throw new Exception("Error: ConnectionStrings section not found in appsettings.json.");
            }

            System.Text.Json.Nodes.JsonNode? connectionStrings = root["ConnectionStrings"];

            Dictionary<string, string> connectionKeys = new Dictionary<string, string>()
            {
                { "feedingfrenzy.readwrite","feedingfrenzy" },
                { "buffaly.readwrite","buffaly" },
                { "buffaly_semanticdb.readwrite","buffaly_semanticdb" }
            };

            foreach (string key in connectionKeys.Keys)
            {
                if (connectionStrings[key] != null)
                {
                    string newConnectionString = $"{connectionStringWithoutCatalog}Initial Catalog={connectionKeys[key]};";

                    connectionStrings[key] = newConnectionString;
                    Console.WriteLine($"Updated {key} connection string");
                }
                else
                {
                    throw new Exception($"Error: {key} not found in appsettings.json.");
                }
            }

            if (root["RooTraxStateSettings"] != null)
            {
                System.Text.Json.Nodes.JsonNode? rootraxSettings = root["RooTraxStateSettings"];

                if (rootraxSettings["RooTraxConnect"] != null)
                {
                    string newRooTraxConnect = $"{connectionStringWithoutCatalog}Initial Catalog=feedingfrenzy;";
                    rootraxSettings["RooTraxConnect"] = newRooTraxConnect;
                    Console.WriteLine($"Updated RooTraxConnect connection string");
                }
                else
                {
                    throw new Exception("Error: RooTraxConnect not found in RooTraxStateSettings.");
                }
            }

            string projectPath = Directory.GetCurrentDirectory();
            ReplacePlaceholderPath(root, "<INSTALLATION_PATH>", projectPath);

            File.WriteAllTextAsync(configPath, root.ToJsonString(new System.Text.Json.JsonSerializerOptions { WriteIndented = true }));
        }
        catch (Exception ex)
        {
            throw new Exception($"Error updating App Settings: {ex.Message}");
        }
    }

    private static void ReplacePlaceholderPath(System.Text.Json.Nodes.JsonNode node, string placeholder, string replacement)
    {
        if (node is System.Text.Json.Nodes.JsonValue valueNode)
        {
            string? value = valueNode.ToString();
            if (value.Contains(placeholder))
            {
                string updatedValue = value.Replace(placeholder, replacement);
                node.ReplaceWith(System.Text.Json.Nodes.JsonValue.Create(updatedValue)!);
                Console.WriteLine($"Updated value: {updatedValue}");
            }
        }
        else if (node is System.Text.Json.Nodes.JsonObject objNode)
        {
            var keys = new List<string>(objNode.AsObject().Select(kv => kv.Key));
            foreach (var key in keys)
            {
                if (objNode[key] != null)
                {
                    ReplacePlaceholderPath(objNode[key]!, placeholder, replacement);
                }
            }
        }
        else if (node is System.Text.Json.Nodes.JsonArray arrayNode)
        {
            for (int i = 0; i < arrayNode.Count; i++)
            {
                if (arrayNode[i] != null)
                {
                    ReplacePlaceholderPath(arrayNode[i]!, placeholder, replacement);
                }
            }
        }
    }

    private static void UpdateRooTraxStateSettings(string connectionStringWithoutCatalog)
    {
        try
        {
            string configPath = "appsettings.json";

            if (!File.Exists(configPath))
            {
                throw new Exception("Error: appsettings.json not found.");
            }

            string jsonText = File.ReadAllText(configPath);
            System.Text.Json.Nodes.JsonNode? root = System.Text.Json.Nodes.JsonNode.Parse(jsonText);

            if (root["RooTraxStateSettings"] != null)
            {
                System.Text.Json.Nodes.JsonNode? rootraxSettings = root["RooTraxStateSettings"];

                if (rootraxSettings["kScriptRootDir"] != null)
                {
                    string projectPath = Directory.GetCurrentDirectory();
                    string updatedScriptRootDir = rootraxSettings["kScriptRootDir"]!.ToString().Replace("<INSTALLATION_PATH>", projectPath);
                    rootraxSettings["kScriptRootDir"] = updatedScriptRootDir;
                    Console.WriteLine($"Updated kScriptRootDir: {updatedScriptRootDir}");
                }
                else
                {
                    throw new Exception("Error: kScriptRootDir not found in RooTraxStateSettings.");
                }
            }
            else
            {
                throw new Exception("Error: RooTraxStateSettings section not found.");
            }

            File.WriteAllTextAsync(configPath, root.ToJsonString(new System.Text.Json.JsonSerializerOptions { WriteIndented = true }));
        }
        catch (Exception ex)
        {
            throw new Exception($"Error updating App Settings: {ex.Message}");
        }
    }
}