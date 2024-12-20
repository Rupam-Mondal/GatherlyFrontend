import { createContext, useEffect, useState } from 'react';

const Authcontext = createContext();

export function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        user: null,
        Token: null,
        isLoading: true
    });
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const Token = localStorage.getItem('Token');
        if (user && Token) {
            setAuth({
                user:user,
                Token:Token,
                isLoading: false
            })
        }
        else {
            setAuth({
                user: null,
                Token: null,
                isLoading: false
            })
        }

    }, []);

    return (
        <Authcontext.Provider value={{ auth, setAuth }}>
            {children}
        </Authcontext.Provider>
    )
}

export default Authcontext;