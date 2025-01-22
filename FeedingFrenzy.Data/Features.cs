
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class FeaturesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int FeatureID { get; set;}
			
		public string FeatureName { get; set;}
			
		public string? Version { get; set;}
			
		public bool IsEnabled { get; set;}
			
		public string? SettingsAssembly { get; set;}
			
		public string SettingsClass { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			

		private string ? m_strSettings = null;
		public string ? Settings 
		{ 
			get
			{
				return (null != m_jsonSettingsObject ? m_jsonSettingsObject.ToString() : m_strSettings);
			}

			set
			{
				m_strSettings = value;
				m_jsonSettingsObject = null;
			}
		}

		private JsonObject ? m_jsonSettingsObject = null;
		public JsonObject SettingsObject
		{
			get
			{
				if (null == m_jsonSettingsObject)
					m_jsonSettingsObject = new JsonObject(StringUtil.IsEmpty(this.Settings) ? "{}" : this.Settings!);

				return m_jsonSettingsObject;
			}
		}
		private string ? m_strData = null;
		public string ? Data 
		{ 
			get
			{
				return (null != m_jsonDataObject ? m_jsonDataObject.ToString() : m_strData);
			}

			set
			{
				m_strData = value;
				m_jsonDataObject = null;
			}
		}

		private JsonObject ? m_jsonDataObject = null;
		public JsonObject DataObject
		{
			get
			{
				if (null == m_jsonDataObject)
					m_jsonDataObject = new JsonObject(StringUtil.IsEmpty(this.Data) ? "{}" : this.Data!);

				return m_jsonDataObject;
			}
		}
		
		
		public FeaturesRow()
		{
			
			this.FeatureID = 0;
				
			this.FeatureName = "";
				
			this.IsEnabled = true;
				
			this.SettingsClass = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  FeaturesRow( FeaturesRow oRow)
		{
			
			this.FeatureID = oRow.FeatureID;
			
			this.FeatureName = oRow.FeatureName;
			
			this.Version = oRow.Version;
			
			this.IsEnabled = oRow.IsEnabled;
			
			this.SettingsAssembly = oRow.SettingsAssembly;
			
			this.SettingsClass = oRow.SettingsClass;
			
			this.Settings = oRow.Settings;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
		}	

		public override int GetHashCode()
		{
			return (FeatureID + 3781 << 12);
		}		

		public override string ToString()
		{
			return $"{FeatureName} ({FeatureID})";
		}
		
	}
	
	public class FeaturesDataTable : List<FeaturesRow>
	{	
		public FeaturesDataTable(FeaturesDataTable oTable)
			: base(oTable)
		{
		}

		public FeaturesDataTable()
		{
		}
	}

    public partial class FeaturesRepository
    {
		static private bool m_bIsCachingEnabled = false; 
		static public bool IsCachingEnabled
		{
			get
			{
				return m_bIsCachingEnabled;
			}
			set
			{
				m_bIsCachingEnabled = value;
			}
		}

		private static RowCache ? m_cache = null;
		public static RowCache Cache
		{
			get
			{
				if (null == m_cache)
					m_cache = CacheManager.Instance.GetOrCreateCache("Features");

				return m_cache!;
			}
		}

		internal static FeaturesRow PopulateRowFromReader(SqlDataReader reader)
		{
			FeaturesRow rowFeature = new FeaturesRow();
			
			rowFeature.FeatureID = DataAccess.GetID(reader, "FeatureID");
			
			rowFeature.FeatureName = DataAccess.GetString(reader, "FeatureName");
			
			rowFeature.Version = DataAccess.GetStringOrNull(reader, "Version");
			
			rowFeature.IsEnabled = DataAccess.GetBoolean(reader, "IsEnabled");
			
			rowFeature.SettingsAssembly = DataAccess.GetStringOrNull(reader, "SettingsAssembly");
			
			rowFeature.SettingsClass = DataAccess.GetString(reader, "SettingsClass");
			
			rowFeature.Settings = DataAccess.GetStringOrNull(reader, "Settings");
			
			rowFeature.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowFeature.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowFeature.Data = DataAccess.GetStringOrNull(reader, "Data");
									

			return rowFeature;
		}

	
		public static int InsertFeature(FeaturesRow oFeature)
		{
			return InsertFeature(
    								 oFeature.FeatureName, 
    								 oFeature.Version, 
    								 oFeature.IsEnabled, 
    								 oFeature.SettingsAssembly, 
    								 oFeature.SettingsClass, 
    								 oFeature.Settings, 
    								 oFeature.Data
									);			
		}

		public static int  InsertFeature(
    		string FeatureName, 
    		string? Version, 
    		bool IsEnabled, 
    		string? SettingsAssembly, 
    		string SettingsClass, 
    		string? Settings, 
    		string? Data)
		{
			int iFeatureID = 0;

			try
			{
				string strStoredProc = "InsertFeatureSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@FeatureName", FeatureName));
				
				sqlParams.Add(DataAccess.Params.String("@Version", Version));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEnabled", IsEnabled));
				
				sqlParams.Add(DataAccess.Params.String("@SettingsAssembly", SettingsAssembly));
				
				sqlParams.Add(DataAccess.Params.String("@SettingsClass", SettingsClass));
				
				sqlParams.Add(DataAccess.Params.Text("@Settings", Settings));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iFeatureID = DataAccess.IntFromProc(strStoredProc, sqlParams, "FeatureID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Feature since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iFeatureID;
		}
		
		public static void UpdateFeature(
    		int FeatureID, 
    		string FeatureName, 
    		string? Version, 
    		bool IsEnabled, 
    		string? SettingsAssembly, 
    		string SettingsClass, 
    		string? Settings, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateFeatureSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@FeatureID", FeatureID));
				
				sqlParams.Add(DataAccess.Params.String("@FeatureName", FeatureName));
				
				sqlParams.Add(DataAccess.Params.String("@Version", Version));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEnabled", IsEnabled));
				
				sqlParams.Add(DataAccess.Params.String("@SettingsAssembly", SettingsAssembly));
				
				sqlParams.Add(DataAccess.Params.String("@SettingsClass", SettingsClass));
				
				sqlParams.Add(DataAccess.Params.Text("@Settings", Settings));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FeatureID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Feature since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateFeature(FeaturesRow oFeature)
		{
			  UpdateFeature(
    								 oFeature.FeatureID, 
    								 oFeature.FeatureName, 
    								 oFeature.Version, 
    								 oFeature.IsEnabled, 
    								 oFeature.SettingsAssembly, 
    								 oFeature.SettingsClass, 
    								 oFeature.Settings, 
    								 oFeature.Data
									);			
		}
		
    	public static void RemoveFeature(int FeatureID)
    	{
			try
			{
				string strStoredProc = "RemoveFeatureSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FeatureID", FeatureID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FeatureID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Feature since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static FeaturesRow ? Get(int FeatureID)
		{
			FeaturesRow ? oFeature = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oFeature = Cache.Get<FeaturesRow>(FeatureID);

				if (null != oFeature)
					return oFeature;
			}

			try
			{
				string strStoredProc = "GetFeatureSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FeatureID", FeatureID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oFeature = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oFeature)
			{
				
				Cache.Insert(oFeature, oFeature.FeatureID, oFeature.FeatureName?.ToString());
				
			}

			return oFeature;
		}
		
		public static FeaturesDataTable GetAll()
		{
			FeaturesDataTable tblFeatures = new FeaturesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetFeaturesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					FeaturesRow rowFeature = PopulateRowFromReader(reader);
					
					tblFeatures.Add(rowFeature);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblFeatures;
		}	
		
		public static int CopyFeature(int FeatureID)
		{
			int iFeatureID = 0;

			try
			{
				string strStoredProc = "CopyFeatureSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FeatureID", FeatureID));

				iFeatureID = DataAccess.IntFromProc(strStoredProc, sqlParams, "FeatureID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Feature since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iFeatureID;
		}  
		
		public static FeaturesRow ? GetFeatureByFeatureName(string FeatureName)
		{
			FeaturesRow ? oFeature = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oFeature = Cache.Get<FeaturesRow>(FeatureName.ToString());

					if (null != oFeature)
						return oFeature;
				}
						

				string strStoredProc = "GetFeatureByFeatureNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@FeatureName", FeatureName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oFeature = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oFeature)
				{
					Cache.Insert(oFeature, oFeature.FeatureID, oFeature.FeatureName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oFeature;		
		}	
			
    	public static void MarkFeatureAsEnabled(int FeatureID)
    	{
    		try
			{
				string strStoredProc = "MarkFeatureAsEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@FeatureID", FeatureID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkFeatureAsNotEnabled(int FeatureID)
    	{
    		try
			{
				string strStoredProc = "MarkFeatureAsNotEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@FeatureID", FeatureID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
			
    	public static void UpdateFeatureSettings(int FeatureID, string ? Settings)
    	{
    		try
			{
				string strStoredProc = "UpdateFeatureSettingsSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FeatureID", FeatureID));
				sqlParams.Add(DataAccess.Params.Text("@Settings", Settings));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FeatureID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateFeatureSettings(FeaturesRow rowFeature)
    	{
    		UpdateFeatureSettings(rowFeature.FeatureID, rowFeature.Data);
    	}  
    	
			
    	public static void UpdateFeatureData(int FeatureID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateFeatureDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@FeatureID", FeatureID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(FeatureID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateFeatureData(FeaturesRow rowFeature)
    	{
    		UpdateFeatureData(rowFeature.FeatureID, rowFeature.Data);
    	}  
    	

	}

}	

		