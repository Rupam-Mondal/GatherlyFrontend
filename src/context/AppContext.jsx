import { CombineContext } from "@/utils/CombineContext";
import { AuthContextProvider } from "./Authcontext";
import { CreateContextProvider } from "./CreateWorkspaceContext";

export const AppcontextProvider = CombineContext(
    AuthContextProvider,
    CreateContextProvider
);