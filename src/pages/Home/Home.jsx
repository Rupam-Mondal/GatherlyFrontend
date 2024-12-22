import UserButton from "@/components/atoms/UserButton/UserButton";
import Allworkspace from "@/components/molecules/Allworkspace";
import { useAuth } from "@/hooks/useAuth";
import { useGetuserWorkspace } from "@/hooks/Workspace/useGetUserWorkspace";

function Home() {
    const { auth, setAuth } = useAuth();
    const { isFetching, data } = useGetuserWorkspace();

    return (
        <div className="h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex flex-col items-center justify-center px-4">
            <div className="absolute top-4 right-4">
                <UserButton auth={auth} setAuth={setAuth} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-8">Your Workspaces</h1>
            <Allworkspace data={data} isFetching={isFetching} />
        </div>
    );
}

export default Home;
