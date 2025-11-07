import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export let AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    console.log(user);

    let createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        });
        return () => {
            unsubscribe()
        }
    }, [])

    let authData = {
        user,
        setUser,
        createUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;