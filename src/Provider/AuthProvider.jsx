import React, { createContext, useState } from 'react';


export let AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let authData = {
        user,
        setUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;