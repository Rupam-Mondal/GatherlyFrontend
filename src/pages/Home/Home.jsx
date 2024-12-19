import Authcontext from "@/context/Authcontext";
import { useAuth } from "@/hooks/useAuth";
import { useContext } from "react";

function Home(){
    const obj =  useAuth();
    return (
        <div className="h-[100vh] w-full bg-zinc-600" onClick={() => {
            console.log(obj);
        }}>click</div>
    )
}

export default Home;