import WorkspaceSidebar from "@/components/molecules/WorkspaceSidebar";
import { useGetWorkspaceId } from "@/hooks/Workspace/useGetWorkspaceId";
import { useParams } from "react-router-dom";

function Workspacepage(){
    const {workspaceId} = useParams();
    const { isFetching,isSuccess,error,data,refetch } = useGetWorkspaceId(workspaceId);
    return (
        <>
            <div className="h-[100vh] w-full bg-gradient-to-b from-[#2C2F33] to-[#23272A] flex">
                <WorkspaceSidebar/>
                <div className="h-20 w-20 bg-red-500">
                    {data?.data?.name}
                </div>
            </div>
        </>
    )
}

export default Workspacepage;