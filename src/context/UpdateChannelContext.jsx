import { createContext, useState } from "react";

const UpdateChannelContext = createContext();
export function UpdateContextProvider({children}){
    const [updateModalOpen , setUpdateModalOpen] = useState(false);
    const [updateInput , setUpdateInput] = useState('');
    return (
        <UpdateChannelContext.Provider value={{ updateModalOpen, setUpdateModalOpen, updateInput, setUpdateInput }}>
            {children}
        </UpdateChannelContext.Provider>
    )
}

export default UpdateChannelContext;