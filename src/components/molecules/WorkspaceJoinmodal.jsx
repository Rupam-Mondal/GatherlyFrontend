import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useJoinWorkspaceModal } from "@/hooks/useJoinworkspaceModal";

function WorkspaceJoinModal() {
    const { openJoinModal, setOpenJoinModal, joinCode, setJoinCode } = useJoinWorkspaceModal();

    function handleJoin() {
        // Logic for joining a workspace
        console.log("Joining workspace with code:", joinCode);
    }

    function handleCancel() {
        setOpenJoinModal(false);
    }

    return (
        <Dialog open={openJoinModal} onOpenChange={setOpenJoinModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Join Workspace</DialogTitle>
                    <DialogDescription>
                        Enter the join code to access the workspace.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    <input
                        type="text"
                        value={joinCode}
                        onChange={(e) => setJoinCode(e.target.value)}
                        placeholder="Enter Join Code"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <DialogFooter className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleJoin}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                    >
                        Join
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default WorkspaceJoinModal;
