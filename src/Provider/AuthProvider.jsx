import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export let AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    // console.log(user);
    let [loading, setLoading] = useState(true)

    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    let logOut = () => {
        return signOut(auth)
    }


    let updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        });
        return () => {
            unsubscribe()
        }
    }, [])

    let authData = {
        loading,
        setLoading,
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        updateUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;