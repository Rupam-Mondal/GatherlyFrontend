import { createContext, useState } from 'react';

const CreateChannelContext = createContext();
export function CreateChannelContextProvider({children}){
    const [channelModalOpen , setChannelModalOpen] = useState(false);
    const [channelName, setChannelName] = useState("");
    return (
        <>
            <CreateChannelContext.Provider value={{ channelModalOpen, setChannelModalOpen, channelName, setChannelName }}>
                {children}
            </CreateChannelContext.Provider>
        </>
    )
}

export default CreateChannelContext;