import useMessageContext from "@/hooks/useMessageContext";
import { createContext, useState }from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export function SocketContextProvider({children}){
    const { messageList, setMessageList } = useMessageContext();
    const [currentChannel , setCurrentChannel] = useState(null);
    const socket = io(import.meta.env.VITE_WEB_SOCKET_URL);
    socket.on('messageToAll' , (data) => {
        console.log("" , data);
        setMessageList((prevMessages) => [data, ...prevMessages]);
    })
    async function joinchannel(channelId) {
        socket.emit('joinchannel' , {channelId:channelId} , (data) => {
            console.log("Joined : " , data);
            setCurrentChannel(data?.data);
        })
    }
    return (
        <SocketContext.Provider value={{socket , currentChannel , joinchannel}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;