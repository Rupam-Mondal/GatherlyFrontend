import { UpdateChannelName } from "@/api/Channels/Channelapis";
import { useMutation } from "@tanstack/react-query";

function useUpdateChannel(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: UpdateChannelName,
        onSuccess:(data) => {
            console.log(data);
        },
        onError:(data) => {
            console.log(data);
        }
    });
    return {
        isPending, 
        isSuccess, 
        error,
        mutateAsync
    }
}

export default useUpdateChannel;