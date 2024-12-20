import UserButton from "@/components/atoms/UserButton/UserButton";
import Authcontext from "@/context/Authcontext";
import { useAuth } from "@/hooks/useAuth";
import { useContext } from "react";

function Home() {
    const { auth, setAuth } = useAuth();
    return (
        <>
            <div className="h-[100vh] bg-zinc-500">
                <UserButton
                    auth={auth}
                    setAuth={setAuth} />
            </div>
        </>

    )
}

export default Home;