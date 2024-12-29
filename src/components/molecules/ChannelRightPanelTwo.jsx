import { Edit, Loader } from "lucide-react";
import ChatBox from "./Chat/Chatbox";
import useUpdateChannel from "@/hooks/ChannelHooks/useUpdateChannel";
import useChannelUpdateModal from "@/hooks/useUpdateChannelModal";
import UpdateChannelModal from "./UpdateChannelModal";
import { useParams } from "react-router-dom";
import MessageRenderer from "../atoms/MessageRenderer/MessageRenderer";
import { useState } from "react";

function ChannelRightPanel({ isFetching, isSuccess, error, data }){
    const { updateModalOpen, setUpdateModalOpen, updateInput, setUpdateInput } = useChannelUpdateModal();
    const { isPending,isSuccess:updateChannelSuccess,error:UpdateChannelError,mutateAsync:UpdateChannel } = useUpdateChannel();
    const { workspaceId, channelId } = useParams();
    const [value, setValue] = useState(null);
    async function UpdateHandler(){
        setUpdateModalOpen(true);
    }
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
                    <span className="ml-6 cursor-pointer" onClick={UpdateHandler}>
                        <Edit size={20}/>
                    </span>
                </div>

                <div className="flex-1">
                    <MessageRenderer value={value}/>
                </div>
                <div><ChatBox
                    value={value}
                    setValue={setValue}
                /></div>
                <UpdateChannelModal channelId={channelId}/>
            </div>
        </>
    )
}

export default ChannelRightPanel;