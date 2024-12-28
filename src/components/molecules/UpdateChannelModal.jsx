import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import useUpdateChannel from "@/hooks/ChannelHooks/useUpdateChannel";
import useChannelUpdateModal from "@/hooks/useUpdateChannelModal";
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

function UpdateChannelModal({ channelId }) {
    const { updateModalOpen, setUpdateModalOpen, updateInput, setUpdateInput } = useChannelUpdateModal();
    const { isPending, isSuccess: updateChannelSuccess, error: UpdateChannelError, mutateAsync: UpdateChannel } = useUpdateChannel();
    const queryClient = useQueryClient();

    const handleSave = async () => {
        if (updateInput.trim()) {
            console.log(updateInput);
            const ChannelObject = {
                channelId: channelId,
                channelName: updateInput
            }
            await UpdateChannel(ChannelObject);
            setUpdateModalOpen(false);
            setUpdateInput('');
            queryClient.invalidateQueries(['fetchworkspaceId']);
        } else {
            alert("Channel name cannot be empty");
        }
    };

    return (
        <Dialog open={updateModalOpen} onOpenChange={setUpdateModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Channel Name</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={updateInput}
                        onChange={(e) => setUpdateInput(e.target.value)}
                        placeholder="Enter new channel name"
                        className="w-full border rounded-md p-2 text-sm"
                    />
                </div>
                <DialogFooter>
                    {
                        isPending ? (
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                <Loader className="animate-spin"/>
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                Save
                            </button>
                        )
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateChannelModal;
