import { Loader } from "lucide-react";

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
            <div className="h-full w-full">
                {data?.data?.name}
            </div>
        </>
    )
}

export default ChannelRightPanel;