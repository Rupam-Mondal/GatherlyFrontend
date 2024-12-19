import Authcontext from "@/context/Authcontext";
import { useContext } from "react";

export function useAuth(){
    return useContext(Authcontext);
}