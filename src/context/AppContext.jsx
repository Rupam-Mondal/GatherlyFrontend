import { CombineContext } from "@/utils/CombineContext";
import { AuthContextProvider } from "./Authcontext";
import { CreateContextProvider } from "./CreateWorkspaceContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { JoinworkspaceProvider } from "./JoinworkspaceModal";

export const AppcontextProvider = CombineContext(
    AuthContextProvider,
    CreateContextProvider,
    CreateChannelContextProvider,
    JoinworkspaceProvider
);