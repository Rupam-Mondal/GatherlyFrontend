import { useGetWorkspaceId } from "@/hooks/Workspace/useGetWorkspaceId";
import useJoinWorkspace from "@/hooks/Workspace/useJoinWorkspace";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Joinpage() {
    const { workspaceId, joincode } = useParams();
    const { isFetching, isSuccess, error, data, refetch } = useGetWorkspaceId(workspaceId);
    const { isPending, isSuccess:joinSuccess, error:JoinError, mutateAsync: workspaceJoin } = useJoinWorkspace();
    const navigate = useNavigate();

    const handleJoin = async () => {
        const joinObject = {
            joincode: joincode
        };
        await workspaceJoin(joinObject);
        navigate(`/home/workspace/${workspaceId}`);

    };

    const handleCancel = () => {
        navigate(`/home`);
    };

    return (
        <div className="h-[100vh] w-full flex justify-center items-center bg-gray-900">
            <div className="h-auto w-[350px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center rounded-xl shadow-lg p-6 space-y-4">
                <h1 className="text-xl font-bold">Join Workspace</h1>
                <div className="text-center">
                    <p className="text-lg font-semibold">{data?.data?.name || "Workspace Name"}</p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={handleJoin}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                        Join
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Joinpage;
