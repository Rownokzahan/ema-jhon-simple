import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //user auth state ovserver
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
            setUser(CurrentUser);
            setLoading(false);
        });

        //stop observing during unmount
        return () => {
            unsubscribe();
        }
    },[])

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
             })
            .catch(error => {
                console.log(error.message);
            })
    }

    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;