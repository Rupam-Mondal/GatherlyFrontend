import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateChannel } from "@/hooks/ChannelHooks/useCreateChannel";
import useCreateChannelModal from "@/hooks/useCreateChannel";
import { useQueryClient } from "@tanstack/react-query";

function CreateChannelModal({workspaceId}) {
    const { channelModalOpen, setChannelModalOpen, channelName, setChannelName } = useCreateChannelModal();
    const { isPending, isSuccess, error, mutateAsync:CreateChannel } = useCreateChannel();
    const queryClient = useQueryClient();
    const handleCreate = async () => {
        console.log(channelName);
        const ChannelObject = {
            workspaceId: workspaceId,
            channelName:channelName
        }
        await CreateChannel(ChannelObject);

        queryClient.invalidateQueries(['fetchworkspaceId']);
        setChannelModalOpen(false);
        setChannelName("");
    };

    const handleCancel = () => {
        setChannelName("");
        setChannelModalOpen(false);
    };

    return (
        <Dialog open={channelModalOpen} onOpenChange={setChannelModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a New Channel</DialogTitle>
                    <DialogDescription>
                        Enter a name for your channel and click Create to proceed.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Channel Name"
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <DialogFooter className="mt-4 flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateChannelModal;
