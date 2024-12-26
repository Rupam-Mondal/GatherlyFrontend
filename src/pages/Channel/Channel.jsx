import WorkspaceSidebar from "@/components/molecules/WorkspaceSidebar";
import { useGetWorkspaceId } from "@/hooks/Workspace/useGetWorkspaceId";
import { useParams } from "react-router-dom";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import WorkspaceNavbar from "@/components/molecules/WorkspaceNavbar";
import ResizablePanelOne from "@/components/molecules/WorkspaceResizablePanelOne";
import CreateChannelModal from "@/components/molecules/CreateChannelModals";
import ResizablePanelTwo from "@/components/molecules/ResizablePaneltwo";

function Channel(){
    const { workspaceId } = useParams();
    const { isFetching, isSuccess, error, data, refetch } = useGetWorkspaceId(workspaceId);
    return (
        <>
            <WorkspaceNavbar />
            <div className="h-[calc(100vh-40px)] w-full flex">
                <WorkspaceSidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId={'workspace-resize'}>
                    <ResizablePanel
                        defaultSize={25}
                        minSize={20}
                        className='bg-indigo-200'
                    >
                        <ResizablePanelOne data={data} />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel
                        minSize={60}
                        className='bg-indigo-100'
                    >
                        
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <CreateChannelModal workspaceId={workspaceId} />
        </>
    )
}

export default Channel;