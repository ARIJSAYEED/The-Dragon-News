import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export let AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    // console.log(user);

    let createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    let logOut = ()=>{
        return signOut(auth)
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
        signInUser,
        createUser,
        logOut,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;