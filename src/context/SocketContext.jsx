import { createContext }from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export function SocketContextProvider({children}){
    const socket = io(import.meta.env.VITE_WEB_SOCKET_URL);
    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;