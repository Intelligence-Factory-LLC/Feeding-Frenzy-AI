using BasicUtilities;
using Buffaly.SemanticDB;
using Buffaly.SemanticDB.Data;
using System.Text;
using WebAppUtilities;

namespace FeedingFrenzy.Admin.Business.Tools
{
    public class APIWorkbench : JsonWs
    {
        static public JsonObject InterpretDirective(int FragmentID, string Directive, string Model, JsonObject jsonValues)
        {
            FragmentsRow rowPrompt = Fragments.GetFragmentByFragmentKey("API/Prompt") ?? throw new Exception("API/Prompt not found");
            string strPrompt = rowPrompt.Fragment;

            List<string> lstCandidates = GetExampleDirectivesBySemanticSearch(Directive);
            strPrompt += "# Examples: \n" + string.Join("\n", lstCandidates);

            Logs.DebugLog.WriteEvent("Directive", Directive);
            Logs.DebugLog.WriteEvent("Prompt", strPrompt);

            JsonObject jsonResult = new JsonObject(Fragments.GetCompletionAsJSON3(FragmentID, strPrompt, Directive, Model));
            return jsonResult;
        }


        static public JsonObject RefineCode(int FragmentID, string Directive, string Code, string Model, JsonObject jsonValues)
        {
            FragmentsRow rowPrompt = Fragments.GetFragmentByFragmentKey("API/Prompt") ?? throw new Exception("API/Prompt not found");
            string strPrompt = rowPrompt.Fragment;

            List<string> lstCandidates = GetExampleDirectivesBySemanticSearch(Directive);
            strPrompt += "# Examples: \n" + string.Join("\n", lstCandidates);


            if (!StringUtil.IsEmpty(Code))
            {
                strPrompt = "## Existing Code\n The follow code has already been generated. Adjust it if possible instead of creating "
                    + "entirely new code\n" + Code;
            }

            Logs.DebugLog.WriteEvent("Directive", Directive);
            Logs.DebugLog.WriteEvent("Prompt", strPrompt);

            JsonObject jsonResult = new JsonObject(Fragments.GetCompletionAsJSON3(FragmentID, strPrompt, Directive, Model));
            return jsonResult;
        }

        static public JsonObject ContinueCode(int FragmentID, string Code, string Model, JsonObject jsonValues)
        {
            FragmentsRow rowPrompt = Fragments.GetFragmentByFragmentKey("API/Prompt") ?? throw new Exception("API/Prompt not found");
            string strPrompt =
@"# Instructions: 

You are a helpful coding assistant used for autocompleting and predicting the next line(s) of code .
You will be given some existing code. Your job is to predict the next code from the existing code. 
Return only the new code, starting at the end of the existing
code. This should allow the new code to be immediately inserted at the end of the existing code.

You can utilize the following Helper code as needed:

# Helper Code:
" +
                rowPrompt.Fragment;

            Logs.DebugLog.WriteEvent("Prompt", strPrompt);

            JsonObject jsonResult = new JsonObject(Fragments.GetCompletionAsJSON3(FragmentID, strPrompt, Code, Model));
            return jsonResult;
        }


        static public async Task SaveDirectiveAndImplementation(string Directive, string Code)
        {
            FragmentsRow rowDirective = Fragments.GetOrInsertFragment(Directive);
            FragmentTags.InsertOrUpdateFragmentTag(rowDirective.FragmentID, "Directive - Example Fulfillments");
            await Embeddings.GetOrCalculateEmbeddingVectorByFragmentID(rowDirective.FragmentID);

            FragmentsRow rowCode = Fragments.GetOrInsertFragment(Code);
            FragmentTags.InsertOrUpdateFragmentTag(rowCode.FragmentID, "JavaScript Code");
            rowCode.ParentFragmentID = rowDirective.FragmentID;
            FragmentsRepository.UpdateFragment(rowCode);
        }

        private static List<string> GetExampleDirectivesBySemanticSearch(string strSimplifiedSentence)
        {
            //Get the actions 
            //Vector embeddings change with characters like ? and carriage returns
            strSimplifiedSentence = new string(strSimplifiedSentence.Where(c => !char.IsPunctuation(c) && c != '\r' && c != '\n').ToArray());

            //We use a higher threshold here 
            Buffaly.SemanticDB.Data.FragmentsDataTable dtFragments = Buffaly.SemanticDB.Fragments.GetMostSimilar2ByTagID(strSimplifiedSentence, "Directive - Example Fulfillments", 0.70);


            List<string> lstCandidates = new List<string>();

            foreach (FragmentsRow rowFragmentAction in dtFragments)
            {
                if (rowFragmentAction.Fragments.Count == 0)
                    continue;

                StringBuilder sb = new StringBuilder();

                sb.Append("Original Instruction: ");
                sb.AppendLine(rowFragmentAction.Fragment);
                sb.AppendLine("Examples:");

                foreach (FragmentsRow rowFragment in rowFragmentAction.Fragments)
                {
                    sb.AppendLine(rowFragment.Fragment);
                }

                lstCandidates.Add(sb.ToString());

                if (lstCandidates.Count > 2)
                    break;
            }

            return lstCandidates;
        }
    }
}
