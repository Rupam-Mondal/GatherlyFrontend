import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateWorkspace } from "@/hooks/useCreateworkspace";
import { useCreateWorkspaceApi } from "@/hooks/Workspace/useCreateworkspaceApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Modals() {
    const { openBox, setOpenBox, workspaceName, setWorkspaceName, workspaceDescription, setWorkspaceDescription } = useCreateWorkspace();
    const { isPending, isSuccess, error, mutateAsync: workspacecreation } = useCreateWorkspaceApi();
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const workspaceObject = {
            name:workspaceName,
            description:workspaceDescription
        }
        const data = await workspacecreation(workspaceObject);
        setOpenBox(false);
        setWorkspaceName('');
        setWorkspaceDescription('');
    };

    return (
        <Dialog open={openBox} onOpenChange={setOpenBox}>
            <DialogContent className="bg-gradient-to-r from-indigo-700 via-purple-800 to-blue-900 p-8 rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-white">Create Workspace</DialogTitle>
                    <DialogDescription className="text-white">
                        Enter the details to create your new workspace.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Workspace Name</label>
                        <input
                            type="text"
                            value={workspaceName}
                            onChange={(e) => setWorkspaceName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter workspace name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Workspace Description</label>
                        <textarea
                            value={workspaceDescription}
                            onChange={(e) => setWorkspaceDescription(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter workspace description"
                        />
                    </div>
                </div>

                <DialogFooter className="flex justify-between">
                    <button
                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        onClick={() => setOpenBox(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                        onClick={handleSubmit}
                    >
                        Create
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Modals;
