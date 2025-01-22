using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FeedingFrenzy.Admin.Business.Common
{
    public class ConsoleUtil
    {
        private class RunResults
        {
            public int ExitCode { get; set; }

            public Exception? RunException { get; set; } = null;

            public StringBuilder Output { get; set; } = new StringBuilder();

            public StringBuilder Error { get; set; } = new StringBuilder();
        }

        // Method to run a command without waiting for its result (fire-and-forget)
        public static void RunWithoutWait(string commandName, string args)
        {
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = commandName,
                    Arguments = args,
                    UseShellExecute = false,
                    CreateNoWindow = true // Do not create a visible window
                }
            };
            process.Start();
        }

        // Asynchronous version of RunWithoutWait using modern Task pattern
        public static async Task RunWithoutWaitAsync(string commandName, string args)
        {
            await Task.Run(() => RunWithoutWait(commandName, args));
        }

        // Method to run a command and capture the output and errors
        public static async Task<string> RunWithResultAsync(string commandName, string args, string workingDirectory)
        {
            var runResults = new RunResults();

            try
            {
                if (!File.Exists(commandName))
                {
                    throw new ArgumentException("Invalid executable path.", nameof(commandName));
                }

                using var process = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = commandName,
                        Arguments = args,
                        WorkingDirectory = workingDirectory,
                        UseShellExecute = false,
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        CreateNoWindow = true
                    }
                };

                Logs.DebugLog.WriteEvent("ConsoleUtil.RunWithResults", $"{commandName} {args}");

                var outputTask = new StringBuilder();
                var errorTask = new StringBuilder();

                process.OutputDataReceived += (sender, e) =>
                {
                    if (e.Data != null) runResults.Output.AppendLine(e.Data);
                };
                process.ErrorDataReceived += (sender, e) =>
                {
                    if (e.Data != null) runResults.Error.AppendLine(e.Data);
                };

                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();

                await process.WaitForExitAsync(); // .NET 6 and later

                runResults.ExitCode = process.ExitCode;
            }
            catch (Exception ex)
            {
                runResults.RunException = ex;
            }

            return runResults.Output.ToString() + runResults.Error.ToString();
        }

        // Synchronous wrapper for backward compatibility (optional)
        public static string RunWithResult(string commandName, string args, string workingDirectory)
        {
            return RunWithResultAsync(commandName, args, workingDirectory).GetAwaiter().GetResult();
        }
    }
}
