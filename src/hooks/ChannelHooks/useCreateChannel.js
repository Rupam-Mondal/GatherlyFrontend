import { createChannel } from "@/api/Channels/Channelapis";
import { useMutation } from "@tanstack/react-query";

export function useCreateChannel(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: createChannel,
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