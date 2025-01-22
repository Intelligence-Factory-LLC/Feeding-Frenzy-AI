
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Features : JsonWs
    {  

    	public static int InsertFeature(
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
    			int iFeatureID = FeaturesRepository.InsertFeature(
    				FeatureName, 
    				Version, 
    				IsEnabled, 
    				SettingsAssembly, 
    				SettingsClass, 
    				Settings, 
    				Data
				);
    		
	    		return iFeatureID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
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
    		FeaturesRepository.UpdateFeature(
    			FeatureID, 
    			FeatureName, 
    			Version, 
    			IsEnabled, 
    			SettingsAssembly, 
    			SettingsClass, 
    			Settings, 
    			Data);
    	} 
		
    	public static void RemoveFeature(int FeatureID)
    	{
    		try
    		{
    			FeaturesRepository.RemoveFeature(FeatureID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static FeaturesRow GetFeature(int FeatureID)
		{
			return FeaturesRepository.Get(FeatureID) ?? throw new ArgumentException("Could not find Feature");
		}
    	
		public static FeaturesDataTable GetFeatures()
		{
			return FeaturesRepository.GetAll();
		}
		
		public static int CopyFeature(int FeatureID)
		{
			return FeaturesRepository.CopyFeature(FeatureID);
		}
		
		public static FeaturesRow GetFeatureByFeatureName(string FeatureName)
		{
			return FeaturesRepository.GetFeatureByFeatureName(FeatureName) ?? throw new ArgumentException("Could not find Feature");
		}			
			
    	public static void MarkFeatureAsEnabled(int FeatureID)
    	{
    		FeaturesRepository.MarkFeatureAsEnabled(FeatureID);
    	}    		
    	
    	public static void MarkFeatureAsNotEnabled(int FeatureID)
    	{
    		FeaturesRepository.MarkFeatureAsNotEnabled(FeatureID);
    	}    		
    	
			
    	public static void UpdateFeatureSettings(int FeatureID, string Settings)
    	{
    		FeaturesRepository.UpdateFeatureSettings(FeatureID, Settings);
    	}   		
    	
			
    	public static void UpdateFeatureData(int FeatureID, string Data)
    	{
    		FeaturesRepository.UpdateFeatureData(FeatureID, Data);
    	}   		
    				
    }
}    
		