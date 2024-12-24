import { useCreateWorkspace } from "@/hooks/useCreateworkspace";
import { useJoinWorkspaceModal } from "@/hooks/useJoinworkspaceModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WorkspaceJoinModal from "./WorkspaceJoinmodal";

function Allworkspace({ data, isFetching, refetch }) {
    const { openBox, setOpenBox } = useCreateWorkspace();
    const navigate = useNavigate();
    const { openJoinModal, setOpenJoinModal, joinCode, setJoinCode } = useJoinWorkspaceModal();

    async function createWorkspace() {
        setOpenBox(true);
    }

    function joinWorkspace() {
        setOpenJoinModal(true);
    }

    function workspaceOpenHandler(Id) {
        navigate(`/home/workspace/${Id}`);
    }

    useEffect(() => {
        refetch();
    }, [openBox]);

    return (
        <div className="p-6 rounded-lg shadow-lg w-full max-w-xl flex flex-col items-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
            <h2 className="text-white text-2xl font-semibold mb-4">Workspaces</h2>
            {isFetching ? (
                <p className="text-gray-300">Loading workspaces...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {data?.data?.map((workspace, index) => (
                        <div
                            key={index}
                            className="bg-indigo-600 p-4 rounded-md shadow-md flex items-center justify-center text-white text-lg font-medium hover:bg-indigo-500 transition cursor-pointer"
                            onClick={() => {
                                workspaceOpenHandler(workspace._id);
                            }}
                        >
                            {workspace.name}
                        </div>
                    ))}
                </div>
            )}
            <div className="flex space-x-4 mt-6">
                <button
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition"
                    onClick={createWorkspace}
                >
                    + Create Workspace
                </button>
                <button
                    className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition"
                    onClick={joinWorkspace}
                >
                    Join Workspace
                </button>
            </div>
            <WorkspaceJoinModal refetch={refetch}/>
        </div>
    );
}

export default Allworkspace;
