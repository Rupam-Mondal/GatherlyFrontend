import { Edit, Loader } from "lucide-react";
import ChatBox from "./Chat/Chatbox";
import useUpdateChannel from "@/hooks/ChannelHooks/useUpdateChannel";

function ChannelRightPanel({ isFetching, isSuccess, error, data }){

    const { isPending,isSuccess:updateChannelSuccess,error:UpdateChannelError,mutateAsync:UpdateChannel } = useUpdateChannel();
    if(isFetching){
        return (
            <div className="h-full w-full flex justify-center items-center">
                <Loader size={40} className="animate-spin text-zinc-500"/>
            </div>
        )
    }
    return (
        <>
            <div className="h-full w-full flex flex-col">
                <div className="w-full h-[50px] text-2xl bg-indigo-300 flex justify-center items-center shadow-md rounded-lg">
                    <span className="drop-shadow-lg">
                        # {data?.data?.name}
                    </span>
                    <span className="ml-6">
                        <Edit size={20}/>
                    </span>
                </div>

                <div className="flex-1"></div>
                <div><ChatBox/></div>
            </div>
        </>
    )
}

export default ChannelRightPanel;