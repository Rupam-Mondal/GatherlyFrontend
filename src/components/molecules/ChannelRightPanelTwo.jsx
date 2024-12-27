import { Loader } from "lucide-react";
import ChatBox from "./Chat/Chatbox";

function ChannelRightPanel({ isFetching, isSuccess, error, data }){
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
                </div>

                <div className="flex-1"></div>
                <div><ChatBox/></div>
            </div>
        </>
    )
}

export default ChannelRightPanel;