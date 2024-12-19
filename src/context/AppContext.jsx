import { CombineContext } from "@/utils/CombineContext";
import { AuthContextProvider } from "./Authcontext";

export const AppcontextProvider = CombineContext(
    AuthContextProvider,
);