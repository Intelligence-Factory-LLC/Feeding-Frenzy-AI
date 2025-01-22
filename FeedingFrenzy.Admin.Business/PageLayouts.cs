
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class PageLayouts : JsonWs
    {  

			//GetPageLayoutsSp_PagingSp ommitted, can't infer types 

    	public static int InsertPageLayout(
    		string Url, 
    		string Handler, 
    		bool IsEnabled, 
    		string? PageTitle, 
    		int? SiteID)    	    	
    	{
    		try
    		{
    			int iPageLayoutID = PageLayoutsRepository.InsertPageLayout(
    				Url, 
    				Handler, 
    				IsEnabled, 
    				PageTitle, 
    				SiteID
				);
    		
	    		return iPageLayoutID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdatePageLayout(
    		int PageLayoutID, 
    		string Url, 
    		string Handler, 
    		bool IsEnabled, 
    		string? PageTitle, 
    		int? SiteID)
    	{
    		PageLayoutsRepository.UpdatePageLayout(
    			PageLayoutID, 
    			Url, 
    			Handler, 
    			IsEnabled, 
    			PageTitle, 
    			SiteID);
    	} 
		
    	public static void RemovePageLayout(int PageLayoutID)
    	{
    		try
    		{
    			PageLayoutsRepository.RemovePageLayout(PageLayoutID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static PageLayoutsRow GetPageLayout(int PageLayoutID)
		{
			return PageLayoutsRepository.Get(PageLayoutID) ?? throw new ArgumentException("Could not find Page Layout");
		}
    	
		public static PageLayoutsDataTable GetPageLayouts()
		{
			return PageLayoutsRepository.GetAll();
		}
		
		public static int CopyPageLayout(int PageLayoutID)
		{
			return PageLayoutsRepository.CopyPageLayout(PageLayoutID);
		}
		
		public static PageLayoutsRow? GetPageLayoutByUrl(string Url)
		{
			return PageLayoutsRepository.GetPageLayoutByUrl(Url);
		}			
			
    	public static void MarkPageLayoutAsEnabled(int PageLayoutID)
    	{
    		PageLayoutsRepository.MarkPageLayoutAsEnabled(PageLayoutID);
    	}    		
    	
    	public static void MarkPageLayoutAsNotEnabled(int PageLayoutID)
    	{
    		PageLayoutsRepository.MarkPageLayoutAsNotEnabled(PageLayoutID);
    	}    		
    				
    }
}    
		