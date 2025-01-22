
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using WebAppUtilities;
using FeedingFrenzy.Data;
using RooTrax.Common;

namespace FeedingFrenzy.Admin.Business
{		
    public partial class Users : JsonWs
    {  
		public static UsersDataTable? GetUsersByUserRoleRoleIDSp_PagingSp(int RoleID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return UsersRepository.GetUsersByUserRoleRoleIDSp_PagingSp(RoleID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static UsersDataTable? GetUsersByUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return UsersRepository.GetUsersByUserIDSp_PagingSp(UserID, Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
    	public static int InsertUser(
    		bool IsEnabled, 
    		string? Data, 
    		string Email, 
    		string? Phone, 
    		string? Password, 
    		bool HasLoggedIn, 
    		DateTime? LastLoginDate, 
    		bool IsLockedOut, 
    		string? InvitationCode, 
    		DateTime? InvitationExpiration, 
    		bool IsInvited, 
    		DateTime? InvitedDate, 
    		string? FirstName, 
    		string? LastName)    	    	
    	{
    		try
    		{
    			int iUserID = UsersRepository.InsertUser(
    				IsEnabled, 
    				Data, 
    				Email, 
    				Phone, 
    				Password, 
    				HasLoggedIn, 
    				LastLoginDate, 
    				IsLockedOut, 
    				InvitationCode, 
    				InvitationExpiration, 
    				IsInvited, 
    				InvitedDate, 
    				FirstName, 
    				LastName
				);
    		
	    		return iUserID;    		
			}
			catch (RooTrax.Common.DB.InsertFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}       		
    	}
		
	
		
    	public static void RemoveUser(int UserID)
    	{
    		try
    		{
    			UsersRepository.RemoveUser(UserID);   
			}
			catch (RooTrax.Common.DB.RemoveFailedException err)
			{
				throw new JsonWsException(err.Message, err);
			}    		 	
    	}
		
		public static UsersRow GetUser(int UserID)
		{
			return UsersRepository.Get(UserID) ?? throw new ArgumentException("Could not find User");
		}
    	
		public static UsersDataTable GetUsers()
		{
			return UsersRepository.GetAll();
		}
		
		public static int CopyUser(int UserID)
		{
			return UsersRepository.CopyUser(UserID);
		}
		
    	public static void MarkUserAsEnabled(int UserID)
    	{
    		UsersRepository.MarkUserAsEnabled(UserID);
    	}    		
    	
    	public static void MarkUserAsNotEnabled(int UserID)
    	{
    		UsersRepository.MarkUserAsNotEnabled(UserID);
    	}    		
    	
			
    	public static void UpdateUserData(int UserID, string Data)
    	{
    		UsersRepository.UpdateUserData(UserID, Data);
    	}   		
    	
		public static UsersRow? GetUserByEmail(string Email)
		{
			return UsersRepository.GetUserByEmail(Email);
		}			
			
    	public static void MarkUserAsHasLoggedIn(int UserID)
    	{
    		UsersRepository.MarkUserAsHasLoggedIn(UserID);
    	}    		
    	
    	public static void MarkUserAsNotHasLoggedIn(int UserID)
    	{
    		UsersRepository.MarkUserAsNotHasLoggedIn(UserID);
    	}    		
    	
    	public static void MarkUserAsLockedOut(int UserID)
    	{
    		UsersRepository.MarkUserAsLockedOut(UserID);
    	}    		
    	
    	public static void MarkUserAsNotLockedOut(int UserID)
    	{
    		UsersRepository.MarkUserAsNotLockedOut(UserID);
    	}    		
    	
    	public static void MarkUserAsInvited(int UserID)
    	{
    		UsersRepository.MarkUserAsInvited(UserID);
    	}    		
    	
    	public static void MarkUserAsNotInvited(int UserID)
    	{
    		UsersRepository.MarkUserAsNotInvited(UserID);
    	}    		
    	

		public static UsersDataTable? GetUsersSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			return UsersRepository.GetUsersSp_PagingSp(Search, SortColumn, SortAscending, SkipRows, NumRows);
		}
			
		public static UsersDataTable GetUsersByUserID(int UserID)
		{
			return UsersRepository.GetUsersByUserID(UserID);
		}		
						
    }
}    
		