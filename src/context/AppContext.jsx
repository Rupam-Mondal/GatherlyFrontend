import { CombineContext } from "@/utils/CombineContext";
import { AuthContextProvider } from "./Authcontext";
import { CreateContextProvider } from "./CreateWorkspaceContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";

export const AppcontextProvider = CombineContext(
    AuthContextProvider,
    CreateContextProvider,
    CreateChannelContextProvider
);