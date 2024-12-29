import { getAllMessagesOfChannel } from "@/api/Channels/Channelapis";
import { useQuery } from "@tanstack/react-query";

function useGetMessageChannelId(workspaceID , channelId){
    const { isFetching, isSuccess, error, data } = useQuery({
        queryFn:() => {
            return getAllMessagesOfChannel();
        },
        queryKey:['PaginatedMessage']
    });
    return {
        isFetching, 
        isSuccess, 
        error, 
        data
    }
}

export default useGetMessageChannelId;