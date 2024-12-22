import { createContext, useState } from 'react';

const CreateWorkspaceContext = createContext();

export function CreateContextProvider({children}){
    const [openBox , setOpenBox] = useState(false);
    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceDescription, setWorkspaceDescription] = useState("");
    return (
        <>
            <CreateWorkspaceContext.Provider value={{ openBox, setOpenBox, workspaceName, setWorkspaceName, workspaceDescription, setWorkspaceDescription }}>
                {children}
            </CreateWorkspaceContext.Provider>
        </>
    )
}

export default CreateWorkspaceContext;