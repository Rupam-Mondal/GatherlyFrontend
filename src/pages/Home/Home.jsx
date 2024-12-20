import UserButton from "@/components/atoms/UserButton/UserButton";
import Authcontext from "@/context/Authcontext";
import { useAuth } from "@/hooks/useAuth";
import { useGetuserWorkspace } from "@/hooks/Workspace/useGetUserWorkspace";
import { useContext } from "react";

function Home() {
    const { auth, setAuth } = useAuth();
    const { isFetching,
        isSuccess,
        error,
        data } = useGetuserWorkspace();
    return (
        <>
            <div className="h-[100vh] bg-[#5765F2]">
                <UserButton
                    auth={auth}
                    setAuth={setAuth} />
                <div className="" onClick={() => {
                    console.log(data);
                }}>click</div>
            </div>
        </>

    )
}

export default Home;