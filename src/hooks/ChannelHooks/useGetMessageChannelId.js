import { getAllMessagesOfChannel } from "@/api/Channels/Channelapis";
import { useQuery } from "@tanstack/react-query";

function useGetMessageChannelId(ChannelObject){
    const { isFetching, isSuccess, error, data } = useQuery({
        queryFn:() => {
            return getAllMessagesOfChannel(ChannelObject);
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