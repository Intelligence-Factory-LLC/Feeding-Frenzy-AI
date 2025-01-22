
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class EmailTemplates : JsonWs
    {  

			//GetEmailTemplatesSp_PagingSp ommitted, can't infer types 
			
    	public static int InsertEmailTemplate(
    		string Name, 
    		string EmailSubject, 
    		string EmailText, 
    		string EmailParams, 
    		string? FromAddress, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iEmailTemplateID = EmailTemplatesRepository.InsertEmailTemplate(
    				Name, 
    				EmailSubject, 
    				EmailText, 
    				EmailParams, 
    				FromAddress, 
    				Data
				);
    		
	    		return iEmailTemplateID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateEmailTemplate(
    		int EmailTemplateID, 
    		string Name, 
    		string EmailSubject, 
    		string EmailText, 
    		string EmailParams, 
    		string? FromAddress, 
    		string? Data)
    	{
    		EmailTemplatesRepository.UpdateEmailTemplate(
    			EmailTemplateID, 
    			Name, 
    			EmailSubject, 
    			EmailText, 
    			EmailParams, 
    			FromAddress, 
    			Data);
    	} 
		
    	public static void RemoveEmailTemplate(int EmailTemplateID)
    	{
    		try
    		{
    			EmailTemplatesRepository.RemoveEmailTemplate(EmailTemplateID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static EmailTemplatesRow GetEmailTemplate(int EmailTemplateID)
		{
			return EmailTemplatesRepository.Get(EmailTemplateID) ?? throw new ArgumentException("Could not find Email Template");
		}
    	
		public static EmailTemplatesDataTable GetEmailTemplates()
		{
			return EmailTemplatesRepository.GetAll();
		}
		
		public static int CopyEmailTemplate(int EmailTemplateID)
		{
			return EmailTemplatesRepository.CopyEmailTemplate(EmailTemplateID);
		}
		
		public static EmailTemplatesRow? GetEmailTemplateByName(string Name)
		{
			return EmailTemplatesRepository.GetEmailTemplateByName(Name);
		}			
			
			
    	public static void UpdateEmailTemplateData(int EmailTemplateID, string Data)
    	{
    		EmailTemplatesRepository.UpdateEmailTemplateData(EmailTemplateID, Data);
    	}   		
    				
    }
}    
		