
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class PageLayoutsRow : RooTrax.Common.DB.BasicRow
	{
		
		public int PageLayoutID { get; set;}
			
		public string Url { get; set;}
			
		public string Handler { get; set;}
			
		public bool IsEnabled { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			
		public string? PageTitle { get; set;}
			
		public int? SiteID { get; set;}
			

		
		
		public PageLayoutsRow()
		{
			
			this.PageLayoutID = 0;
				
			this.Url = "";
				
			this.Handler = "";
				
			this.IsEnabled = true;
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  PageLayoutsRow( PageLayoutsRow oRow)
		{
			
			this.PageLayoutID = oRow.PageLayoutID;
			
			this.Url = oRow.Url;
			
			this.Handler = oRow.Handler;
			
			this.IsEnabled = oRow.IsEnabled;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.PageTitle = oRow.PageTitle;
			
			this.SiteID = oRow.SiteID;
			
		}	

		public override int GetHashCode()
		{
			return (PageLayoutID + 1737 << 12);
		}		

		public override string ToString()
		{
			return $"{Url} ({PageLayoutID})";
		}
		
	}
	
	public class PageLayoutsDataTable : List<PageLayoutsRow>
	{	
		public PageLayoutsDataTable(PageLayoutsDataTable oTable)
			: base(oTable)
		{
		}

		public PageLayoutsDataTable()
		{
		}
	}

    public partial class PageLayoutsRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("PageLayouts");

				return m_cache!;
			}
		}



	
		public static int InsertPageLayout(PageLayoutsRow oPageLayout)
		{
			return InsertPageLayout(
    								 oPageLayout.Url, 
    								 oPageLayout.Handler, 
    								 oPageLayout.IsEnabled, 
    								 oPageLayout.PageTitle, 
    								 oPageLayout.SiteID
									);			
		}

		public static int  InsertPageLayout(
    		string Url, 
    		string Handler, 
    		bool IsEnabled, 
    		string? PageTitle, 
    		int? SiteID)
		{
			int iPageLayoutID = 0;

			try
			{
				string strStoredProc = "InsertPageLayoutSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Url("@Url", Url));
				
				sqlParams.Add(DataAccess.Params.Url("@Handler", Handler));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEnabled", IsEnabled));
				
				sqlParams.Add(DataAccess.Params.String("@PageTitle", PageTitle));
				
				sqlParams.Add(DataAccess.Params.ID("@SiteID", SiteID));
				
				iPageLayoutID = DataAccess.IntFromProc(strStoredProc, sqlParams, "PageLayoutID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Page Layout since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iPageLayoutID;
		}
		
		public static void UpdatePageLayout(
    		int PageLayoutID, 
    		string Url, 
    		string Handler, 
    		bool IsEnabled, 
    		string? PageTitle, 
    		int? SiteID)
    	{    	
    		try
			{
				string strStoredProc = "UpdatePageLayoutSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@PageLayoutID", PageLayoutID));
				
				sqlParams.Add(DataAccess.Params.Url("@Url", Url));
				
				sqlParams.Add(DataAccess.Params.Url("@Handler", Handler));
				
				sqlParams.Add(DataAccess.Params.Boolean("@IsEnabled", IsEnabled));
				
				sqlParams.Add(DataAccess.Params.String("@PageTitle", PageTitle));
				
				sqlParams.Add(DataAccess.Params.ID("@SiteID", SiteID));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(PageLayoutID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Page Layout since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdatePageLayout(PageLayoutsRow oPageLayout)
		{
			  UpdatePageLayout(
    								 oPageLayout.PageLayoutID, 
    								 oPageLayout.Url, 
    								 oPageLayout.Handler, 
    								 oPageLayout.IsEnabled, 
    								 oPageLayout.PageTitle, 
    								 oPageLayout.SiteID
									);			
		}
		
    	public static void RemovePageLayout(int PageLayoutID)
    	{
			try
			{
				string strStoredProc = "RemovePageLayoutSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PageLayoutID", PageLayoutID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(PageLayoutID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Page Layout since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static PageLayoutsRow ? Get(int PageLayoutID)
		{
			PageLayoutsRow ? oPageLayout = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oPageLayout = Cache.Get<PageLayoutsRow>(PageLayoutID);

				if (null != oPageLayout)
					return oPageLayout;
			}

			try
			{
				string strStoredProc = "GetPageLayoutSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PageLayoutID", PageLayoutID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oPageLayout = new PageLayoutsRow();
					
					oPageLayout.PageLayoutID = DataAccess.GetID(reader, "PageLayoutID");
					oPageLayout.Url = DataAccess.GetUrl(reader, "Url");
					oPageLayout.Handler = DataAccess.GetUrl(reader, "Handler");
					oPageLayout.IsEnabled = DataAccess.GetBoolean(reader, "IsEnabled");
					oPageLayout.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oPageLayout.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					oPageLayout.PageTitle = DataAccess.GetStringOrNull(reader, "PageTitle");
					oPageLayout.SiteID = DataAccess.GetIDOrNull(reader, "SiteID");						
						
				}
				else
				{
					//todo  handle error
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oPageLayout)
			{
				
				Cache.Insert(oPageLayout, oPageLayout.PageLayoutID, oPageLayout.Url?.ToString());
				
			}

			return oPageLayout;
		}
		
		public static PageLayoutsDataTable GetAll()
		{
			PageLayoutsDataTable tblPageLayouts = new PageLayoutsDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetPageLayoutsSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					PageLayoutsRow rowPageLayout = new PageLayoutsRow();
					
					rowPageLayout.PageLayoutID = DataAccess.GetID(reader, "PageLayoutID");
					rowPageLayout.Url = DataAccess.GetUrl(reader, "Url");
					rowPageLayout.Handler = DataAccess.GetUrl(reader, "Handler");
					rowPageLayout.IsEnabled = DataAccess.GetBoolean(reader, "IsEnabled");
					rowPageLayout.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					rowPageLayout.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					rowPageLayout.PageTitle = DataAccess.GetStringOrNull(reader, "PageTitle");
					rowPageLayout.SiteID = DataAccess.GetIDOrNull(reader, "SiteID");
					
					tblPageLayouts.Add(rowPageLayout);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblPageLayouts;
		}	
		
		public static int CopyPageLayout(int PageLayoutID)
		{
			int iPageLayoutID = 0;

			try
			{
				string strStoredProc = "CopyPageLayoutSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@PageLayoutID", PageLayoutID));

				iPageLayoutID = DataAccess.IntFromProc(strStoredProc, sqlParams, "PageLayoutID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Page Layout since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iPageLayoutID;
		}  
		
		public static PageLayoutsRow ? GetPageLayoutByUrl(string Url)
		{
			PageLayoutsRow ? oPageLayout = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oPageLayout = Cache.Get<PageLayoutsRow>(Url.ToString());

					if (null != oPageLayout)
						return oPageLayout;
				}
						

				string strStoredProc = "GetPageLayoutByUrlSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Url("@Url", Url));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oPageLayout = new PageLayoutsRow();
					
					oPageLayout.PageLayoutID = DataAccess.GetID(reader, "PageLayoutID");
					oPageLayout.Url = DataAccess.GetUrl(reader, "Url");
					oPageLayout.Handler = DataAccess.GetUrl(reader, "Handler");
					oPageLayout.IsEnabled = DataAccess.GetBoolean(reader, "IsEnabled");
					oPageLayout.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
					oPageLayout.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
					oPageLayout.PageTitle = DataAccess.GetStringOrNull(reader, "PageTitle");
					oPageLayout.SiteID = DataAccess.GetIDOrNull(reader, "SiteID");
				}

				

				if (IsCachingEnabled && null != oPageLayout)
				{
					Cache.Insert(oPageLayout, oPageLayout.PageLayoutID, oPageLayout.Url?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oPageLayout;		
		}	
			
    	public static void MarkPageLayoutAsEnabled(int PageLayoutID)
    	{
    		try
			{
				string strStoredProc = "MarkPageLayoutAsEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PageLayoutID", PageLayoutID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
    	public static void MarkPageLayoutAsNotEnabled(int PageLayoutID)
    	{
    		try
			{
				string strStoredProc = "MarkPageLayoutAsNotEnabledSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.AddInt("@PageLayoutID", PageLayoutID);

				DataAccess.ExecProc(strStoredProc, sqlParams);
			}
		
			finally
			{

			}  
	  	}    		    	   
    	
	}

}	

		