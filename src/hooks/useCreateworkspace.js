import CreateWorkspaceContext from "@/context/CreateWorkspaceContext";
import { useContext } from "react";

export function useCreateWorkspace(){
    return useContext(CreateWorkspaceContext);
}