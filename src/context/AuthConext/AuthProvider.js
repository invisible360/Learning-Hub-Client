import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState (true);

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const googleLogin = () => {
        setLoading (true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const githubLogin = () => {
        setLoading (true);
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut = () => {
        setLoading (true);
        return signOut(auth)
    }

    const signIn = (email, password) => {
        setLoading (true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading (false)
        })
        return () => unsubscribe();
    }, [])



    const authInfo = {
        user,
        createUser,
        profileUpdate,
        googleLogin,
        githubLogin,
        logOut,
        signIn,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;