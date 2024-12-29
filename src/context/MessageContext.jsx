import{ createContext, useContext, useState } from "react";

const MessageContext = createContext();


export function MessageContextProvider({children}){
    const [messageList , setMessageList] = useState([1 , 2]);
    return (
        <MessageContext.Provider value={{ messageList, setMessageList }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext;