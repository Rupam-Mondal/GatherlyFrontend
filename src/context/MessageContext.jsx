import{ createContext, useContext, useState } from "react";

const MessageContext = createContext();


export function MessageContextProvider({children}){
    const [messageList , setMessageList] = useState();
    return (
        <MessageContext.Provider value={{ messageList, setMessageList }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext;