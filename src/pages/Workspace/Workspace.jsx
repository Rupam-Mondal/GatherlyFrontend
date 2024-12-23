import WorkspaceSidebar from "@/components/molecules/WorkspaceSidebar";
import { useGetWorkspaceId } from "@/hooks/Workspace/useGetWorkspaceId";
import { LucideLoader2, LucideLoaderCircle, LucideLoaderPinwheel } from "lucide-react";
import { useParams } from "react-router-dom";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import WorkspaceNavbar from "@/components/molecules/WorkspaceNavbar";
import ResizablePanelOne from "@/components/molecules/WorkspaceResizablePanelOne";

function Workspacepage(){
    const {workspaceId} = useParams();
    const { isFetching,isSuccess,error,data,refetch } = useGetWorkspaceId(workspaceId);
    return (
        <>
            <WorkspaceNavbar/>
            <div className="h-[calc(100vh-40px)] w-full bg-gradient-to-b from-[#2C2F33] to-[#23272A] flex">
                <WorkspaceSidebar/>
                <ResizablePanelGroup direction="horizontal" autoSaveId={'workspace-resize'}>
                    <ResizablePanel
                        defaultSize={25}
                        minSize={20}
                        className='bg-zinc-700'
                    >
                        <ResizablePanelOne data={data}/>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel
                        minSize={60}
                        className='bg-zinc-600'
                    >
                        
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </>
    )
}

export default Workspacepage;