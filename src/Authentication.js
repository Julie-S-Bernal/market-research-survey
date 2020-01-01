import React, {useEffect, useState} from "react";
import app from "./base.js";

export const AuthenticationContext = React.createContext();


export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setUser);
    },[]);

    return(
        <AuthenticationContext.Provider value={{user}}>
            {children}
        </AuthenticationContext.Provider>
    )
}
