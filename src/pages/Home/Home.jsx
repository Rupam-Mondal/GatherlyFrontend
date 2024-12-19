import Authcontext from "@/context/Authcontext";
import { useAuth } from "@/hooks/useAuth";
import { useContext } from "react";

function Home(){
    const {auth , setAuth} =  useAuth();
    return (
        <>
            <div className="h-[100vh] bg-zinc-500">
                <div onClick={() => {
                    console.log(auth)
                }}>click</div>
                <div className="h-20 w-20 bg-white">
                    <img src={auth.user.avatar} alt="" />
                </div>
            </div>
        </>
        
    )
}

export default Home;