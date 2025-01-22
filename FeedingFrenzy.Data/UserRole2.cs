using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BasicUtilities;

namespace FeedingFrenzy.Data
{
    public partial class UserRolesRepository
    {
        public static void RemoveUserRoles(int UserID)
        {
            try
            {
                string strStoredProc = "RemoveUserRolesSp";

                SqlParams sqlParams = new SqlParams();
                sqlParams.Add(DataAccess.Params.ID("@UserID", UserID));

                DataAccess.ExecProc(strStoredProc, sqlParams);

                if (IsCachingEnabled)
                {
                    Cache.Invalidate(UserID);
                }
            }
            catch (SqlException err)
            {
                if (err.Message.Contains("The DELETE statement conflicted with the REFERENCE constraint"))
                    throw new RooTrax.Common.DB.RemoveFailedException("Cannot delete this User Role since it is in use", err);

                throw;
            }

            finally

            {


            }
        }
    }
}
