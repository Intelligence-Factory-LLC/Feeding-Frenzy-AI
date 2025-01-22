
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Authorizations : JsonWs
    {  

		public static AuthorizationsDataTable? GetAuthorizationsSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return AuthorizationsRepository.GetAuthorizationsSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static AuthorizationsDataTable? GetAuthorizationsByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return AuthorizationsRepository.GetAuthorizationsByUserIDSp_PagingSp(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static AuthorizationsRow? GetAuthorizationByRefreshToken(string RefreshToken)
		{
			return AuthorizationsRepository.GetAuthorizationByRefreshToken(RefreshToken);
		}			
			
		public static AuthorizationsRow? GetAndUpdate(string AuthorizationToken)
		{
			return AuthorizationsRepository.GetAndUpdate(AuthorizationToken);
		}			
			
    	public static int InsertAuthorization(
    		string AuthorizationToken, 
    		string RefreshToken, 
    		DateTime? Expiration, 
    		int UserID, 
    		DateTime? LastRefreshedDate, 
    		DateTime? LastActivityDate, 
    		bool IsExpired, 
    		bool IsRevoked, 
    		bool IsEncrypted, 
    		string? Data)    	    	
    	{
    		try
    		{
    			int iAuthorizationID = AuthorizationsRepository.InsertAuthorization(
    				AuthorizationToken, 
    				RefreshToken, 
    				Expiration, 
    				UserID, 
    				LastRefreshedDate, 
    				LastActivityDate, 
    				IsExpired, 
    				IsRevoked, 
    				IsEncrypted, 
    				Data
				);
    		
	    		return iAuthorizationID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
		public static void UpdateAuthorization(
    		int AuthorizationID, 
    		string AuthorizationToken, 
    		string RefreshToken, 
    		DateTime? Expiration, 
    		int UserID, 
    		DateTime? LastRefreshedDate, 
    		DateTime? LastActivityDate, 
    		bool IsExpired, 
    		bool IsRevoked, 
    		bool IsEncrypted, 
    		string? Data)
    	{
    		AuthorizationsRepository.UpdateAuthorization(
    			AuthorizationID, 
    			AuthorizationToken, 
    			RefreshToken, 
    			Expiration, 
    			UserID, 
    			LastRefreshedDate, 
    			LastActivityDate, 
    			IsExpired, 
    			IsRevoked, 
    			IsEncrypted, 
    			Data);
    	} 
		
    	public static void RemoveAuthorization(int AuthorizationID)
    	{
    		try
    		{
    			AuthorizationsRepository.RemoveAuthorization(AuthorizationID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static AuthorizationsRow GetAuthorization(int AuthorizationID)
		{
			return AuthorizationsRepository.Get(AuthorizationID) ?? throw new ArgumentException("Could not find Authorization");
		}
    	
		public static AuthorizationsDataTable GetAuthorizations()
		{
			return AuthorizationsRepository.GetAll();
		}
		
		public static int CopyAuthorization(int AuthorizationID)
		{
			return AuthorizationsRepository.CopyAuthorization(AuthorizationID);
		}
		
		public static AuthorizationsRow? GetAuthorizationByAuthorizationToken(string AuthorizationToken)
		{
			return AuthorizationsRepository.GetAuthorizationByAuthorizationToken(AuthorizationToken);
		}			
			
    	public static void MarkAuthorizationAsExpired(int AuthorizationID)
    	{
    		AuthorizationsRepository.MarkAuthorizationAsExpired(AuthorizationID);
    	}    		
    	
    	public static void MarkAuthorizationAsNotExpired(int AuthorizationID)
    	{
    		AuthorizationsRepository.MarkAuthorizationAsNotExpired(AuthorizationID);
    	}    		
    	
    	public static void MarkAuthorizationAsRevoked(int AuthorizationID)
    	{
    		AuthorizationsRepository.MarkAuthorizationAsRevoked(AuthorizationID);
    	}    		
    	
    	public static void MarkAuthorizationAsNotRevoked(int AuthorizationID)
    	{
    		AuthorizationsRepository.MarkAuthorizationAsNotRevoked(AuthorizationID);
    	}    		
    	
    	public static void MarkAuthorizationAsEncrypted(int AuthorizationID)
    	{
    		AuthorizationsRepository.MarkAuthorizationAsEncrypted(AuthorizationID);
    	}    		
    	
    	public static void MarkAuthorizationAsNotEncrypted(int AuthorizationID)
    	{
    		AuthorizationsRepository.MarkAuthorizationAsNotEncrypted(AuthorizationID);
    	}    		
    	
			
    	public static void UpdateAuthorizationData(int AuthorizationID, string Data)
    	{
    		AuthorizationsRepository.UpdateAuthorizationData(AuthorizationID, Data);
    	}   		
    	
		public static AuthorizationsDataTable GetAuthorizationsByUserID(int UserID)
		{
			return AuthorizationsRepository.GetAuthorizationsByUserID(UserID);
		}		
						
    }
}    
		