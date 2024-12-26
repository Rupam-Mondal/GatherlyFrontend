import { getChannelById } from "@/api/Channels/Channelapis";
import { useQuery } from "@tanstack/react-query";

function useGetChannelById(channelId){
    const { isFetching, isSuccess, error, data } = useQuery({
        queryFn:async () => {
            getChannelById({ channelId :channelId});
        },
        queryKey:[`channel-${channelId}`]
    });
    return {
        isFetching, 
        isSuccess, 
        error, 
        data
    }
}
export default useGetChannelById;