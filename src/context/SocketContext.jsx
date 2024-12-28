import { createContext, useState }from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export function SocketContextProvider({children}){
    const [currentChannel , setCurrentChannel] = useState(null);
    const socket = io(import.meta.env.VITE_WEB_SOCKET_URL);
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