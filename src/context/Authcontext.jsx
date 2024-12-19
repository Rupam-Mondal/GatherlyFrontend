import { createContext, useEffect, useState } from 'react';

const Authcontext = createContext();

export function AuthContextProvider({children}){
    const [auth , setAuth] = useState({
        user : null,
        Token:null
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const Token = JSON.getItem('Token');
        if(user && Token){
            setAuth({
                user,
                Token
            })
        }
    } , []);

    return (
        <Authcontext.Provider value={{ auth, setAuth }}>
            {children}
        </Authcontext.Provider>
    )
}

return Authcontext;