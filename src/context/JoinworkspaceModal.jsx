import { createContext, useState } from "react";

const JoinworkspaceContext = createContext();

export function JoinworkspaceProvider({children}){
    const [openJoinModal , setOpenJoinModal] = useState(false);
    const [joinCode , setJoinCode] = useState('');
    return (
        <>
            <JoinworkspaceContext.Provider value={{ openJoinModal, setOpenJoinModal, joinCode, setJoinCode }}>
                {children}
            </JoinworkspaceContext.Provider>
        </>
    )
}

export default JoinworkspaceContext;