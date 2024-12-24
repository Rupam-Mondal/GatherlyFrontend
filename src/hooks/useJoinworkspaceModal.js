import JoinworkspaceContext from "@/context/JoinworkspaceModal";
import { useContext } from "react";

export function useJoinWorkspaceModal(){
    return useContext(JoinworkspaceContext);
}