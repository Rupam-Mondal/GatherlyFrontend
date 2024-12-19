import { useAuth } from "@/hooks/useAuth";
import { LucideLoader2 } from "lucide-react";
import { Navigate } from "react-router-dom";


export function ProtectedRoute({children}){
    const {auth} = useAuth();
    if(auth.isLoading){
        return <div><LucideLoader2 className="animate-spin"/>Wait for verification</div>
    }
    if(!auth.user || !auth.Token){
        return <Navigate to = "/auth/signin"/>
    }
    return children;
}