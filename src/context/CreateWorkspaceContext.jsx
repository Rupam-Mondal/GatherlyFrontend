import { createContext, useState } from 'react';

const CreateWorkspaceContext = createContext();

export function CreateContextProvider({children}){
    const [openBox , setOpenBox] = useState(false);
    return (
        <>
            <CreateWorkspaceContext.Provider value={{openBox , setOpenBox}}>
                {children}
            </CreateWorkspaceContext.Provider>
        </>
    )
}

export default CreateWorkspaceContext;