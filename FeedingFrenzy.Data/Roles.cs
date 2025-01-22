
using System;
using System.Collections.Generic;
using System.Text;
using BasicUtilities;
using System.Data.SqlClient;
using RooTrax.Common;
using RooTrax.Cache;

namespace FeedingFrenzy.Data
{	
	public partial class RolesRow : RooTrax.Common.DB.BasicRow
	{
		
		public int RoleID { get; set;}
			
		public string RoleName { get; set;}
			
		public DateTime DateCreated { get; set;}
			
		public DateTime LastUpdated { get; set;}
			

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
		
		private UsersDataTable ? m_UserRoleUsers = null;
		public UsersDataTable ? UserRoleUsers
		{
			get
			{
				if (null == m_UserRoleUsers && this.EnableLazyLoadProperties)
					m_UserRoleUsers = UserRolesRepository.GetUsersByUserRoleRoleID(this.RoleID);

				return m_UserRoleUsers;
			}
		}

		private UserRolesDataTable ? m_UserRoles = null;
		public UserRolesDataTable ? UserRoles
		{
			get
			{
				if (null == m_UserRoles && this.EnableLazyLoadProperties)
					m_UserRoles = UserRolesRepository.GetUserRolesByRoleID(this.RoleID);
				return m_UserRoles;
			}
		}	
								
		
		public RolesRow()
		{
			
			this.RoleID = 0;
				
			this.RoleName = "";
				
			this.DateCreated = DateTime.Now;
				
			this.LastUpdated = DateTime.Now;
				
		}

		public  RolesRow( RolesRow oRow)
		{
			
			this.RoleID = oRow.RoleID;
			
			this.RoleName = oRow.RoleName;
			
			this.DateCreated = oRow.DateCreated;
			
			this.LastUpdated = oRow.LastUpdated;
			
			this.Data = oRow.Data;
			
		}	

		public override int GetHashCode()
		{
			return (RoleID + 1714 << 12);
		}		

		public override string ToString()
		{
			return $"{RoleName} ({RoleID})";
		}
		
	}
	
	public class RolesDataTable : List<RolesRow>
	{	
		public RolesDataTable(RolesDataTable oTable)
			: base(oTable)
		{
		}

		public RolesDataTable()
		{
		}
	}

    public partial class RolesRepository
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
					m_cache = CacheManager.Instance.GetOrCreateCache("Roles");

				return m_cache!;
			}
		}

		internal static RolesRow PopulateRowFromReader(SqlDataReader reader)
		{
			RolesRow rowRole = new RolesRow();
			
			rowRole.RoleID = DataAccess.GetID(reader, "RoleID");
			
			rowRole.RoleName = DataAccess.GetString(reader, "RoleName");
			
			rowRole.DateCreated = DataAccess.GetDateTime(reader, "DateCreated");
			
			rowRole.LastUpdated = DataAccess.GetDateTime(reader, "LastUpdated");
			
			rowRole.Data = DataAccess.GetStringOrNull(reader, "Data");
									

			return rowRole;
		}

	
		public static int InsertRole(RolesRow oRole)
		{
			return InsertRole(
    								 oRole.RoleName, 
    								 oRole.Data
									);			
		}

		public static int  InsertRole(
    		string RoleName, 
    		string? Data)
		{
			int iRoleID = 0;

			try
			{
				string strStoredProc = "InsertRoleSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@RoleName", RoleName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				iRoleID = DataAccess.IntFromProc(strStoredProc, sqlParams, "RoleID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Role since it already exists ("  + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw;
			}
					
			finally
			{

			}

			return iRoleID;
		}
		
		public static void UpdateRole(
    		int RoleID, 
    		string RoleName, 
    		string? Data)
    	{    	
    		try
			{
				string strStoredProc = "UpdateRoleSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				
				sqlParams.Add(DataAccess.Params.String("@RoleName", RoleName));
				
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));
				
				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RoleID);
				}
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Role since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);
				
				throw;
			}
		
			finally
			{

			}

    	}
    	
		public static void UpdateRole(RolesRow oRole)
		{
			  UpdateRole(
    								 oRole.RoleID, 
    								 oRole.RoleName, 
    								 oRole.Data
									);			
		}
		
    	public static void RemoveRole(int RoleID)
    	{
			try
			{
				string strStoredProc = "RemoveRoleSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RoleID);
				}
			}
			catch (SqlException err)
			{
				if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
					throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this Role since it is in use", err);

				throw;
			}

			finally
			
			{
			
			
			} 	
		}
		
		public static RolesRow Get(int RoleID)
		{
			RolesRow ? oRole = null;
			SqlDataReader ? reader = null;

			if (IsCachingEnabled)
			{
				oRole = Cache.Get<RolesRow>(RoleID);

				if (null != oRole)
					return oRole;
			}

			try
			{
				string strStoredProc = "GetRoleSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRole = PopulateRowFromReader(reader);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			if (IsCachingEnabled && null != oRole)
			{
				
				Cache.Insert(oRole, oRole.RoleID, oRole.RoleName?.ToString());
				
			}

			return oRole ?? throw new Exception("Could not find Role " + RoleID);
		}
		
		public static RolesDataTable GetAll()
		{
			RolesDataTable tblRoles = new RolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRolesSp";

				SqlParams sqlParams = new SqlParams();

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RolesRow rowRole = PopulateRowFromReader(reader);
					
					tblRoles.Add(rowRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRoles;
		}	
		
		public static int CopyRole(int RoleID)
		{
			int iRoleID = 0;

			try
			{
				string strStoredProc = "CopyRoleSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));

				iRoleID = DataAccess.IntFromProc(strStoredProc, sqlParams, "RoleID");
			}
			
			catch (SqlException err)
			{
				if (err.Message.Contains("Cannot insert duplicate key row in object"))
					throw new RooTrax.Common.DB.InsertFailedException("Cannot insert Role since it already exists (" + StringUtil.Between(err.Message, "(", ")") + ")", err);

				throw err;
			}
					
			finally
			{

			}

			return iRoleID;
		}  
		
		public static RolesRow ? GetRoleByRoleName(string RoleName)
		{
			RolesRow ? oRole = null;
			SqlDataReader ? reader = null;

			try
			{
				
				if (IsCachingEnabled)
				{
					oRole = Cache.Get<RolesRow>(RoleName.ToString());

					if (null != oRole)
						return oRole;
				}
						

				string strStoredProc = "GetRoleByRoleNameSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@RoleName", RoleName));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					oRole = PopulateRowFromReader(reader);
				}

				

				if (IsCachingEnabled && null != oRole)
				{
					Cache.Insert(oRole, oRole.RoleID, oRole.RoleName?.ToString());
				}
						
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return oRole;		
		}	
			
			
    	public static void UpdateRoleData(int RoleID, string ? Data)
    	{
    		try
			{
				string strStoredProc = "UpdateRoleDataSp";

				SqlParams sqlParams = new SqlParams();
				sqlParams.Add(DataAccess.Params.ID("@RoleID", RoleID));
				sqlParams.Add(DataAccess.Params.Text("@Data", Data));

				DataAccess.ExecProc(strStoredProc, sqlParams);

				if (IsCachingEnabled)
				{
					Cache.Invalidate(RoleID);
				}
			}
		
			finally
			{

			}
    	}   
		
		public static void UpdateRoleData(RolesRow rowRole)
    	{
    		UpdateRoleData(rowRole.RoleID, rowRole.Data);
    	}  
    	
		public static RolesDataTable GetRolesSp_PagingSp(string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RolesDataTable tblRoles = new RolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRolesSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RolesRow rowRole = PopulateRowFromReader(reader);

					tblRoles.Add(rowRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRoles;
		}				
		public static int? GetRolesSp_CountSp(string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRolesSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRolesSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		
		public static RolesDataTable GetRolesByUserRoleUserIDSp_PagingSp(int UserID, string Search, string SortColumn, bool SortAscending, int SkipRows, int NumRows)
		{
			RolesDataTable tblRoles = new RolesDataTable();
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRolesByUserRoleUserIDSp_PagingSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Integer("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				
				sqlParams.Add(DataAccess.Params.String("@SortColumn", SortColumn));
				
				sqlParams.Add(DataAccess.Params.Boolean("@SortAscending", SortAscending));
				
				sqlParams.Add(DataAccess.Params.Integer("@SkipRows", SkipRows));
				
				sqlParams.Add(DataAccess.Params.Integer("@NumRows", NumRows));
				
				
				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				while (reader.HasRows && reader.Read())
				{
					RolesRow rowRole = PopulateRowFromReader(reader);

					tblRoles.Add(rowRole);
				}
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return tblRoles;
		}				
		public static int? GetRolesByUserRoleUserIDSp_CountSp(int UserID, string Search)
		{
			int? result;
			SqlDataReader ? reader = null;

			try
			{
				string strStoredProc = "GetRolesByUserRoleUserIDSp_CountSp";

				SqlParams sqlParams = new SqlParams();
				
				sqlParams.Add(DataAccess.Params.Integer("@UserID", UserID));
				
				sqlParams.Add(DataAccess.Params.String("@Search", Search));
				

				reader = DataAccess.ReaderFromProc(strStoredProc, sqlParams);

				if (reader.HasRows && reader.Read())
				{
					result = DataAccess.GetIntegerOrNull(reader, reader.GetName(0));
				}
				else
					throw new Exception("Could not read result from GetRolesByUserRoleUserIDSp_CountSp");
			}
			finally
			{
				DBUtilities.CloseReader(reader);
			}

			return result;

		}	
		

	}

}	

		