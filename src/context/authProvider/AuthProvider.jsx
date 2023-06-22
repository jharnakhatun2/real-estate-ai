import app from 'context/firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);//when will create user loading is start
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        setLoading(true);//when will user login process loading is start
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = ()=>{
        setLoading(true);//when will user logout process loading is start
        return signOut(auth);
    }
    // auth state observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);//when will get user loading is finished
        })
            return () => unsubscribe();
    },[])

    const authInfo ={
        createUser,
        user,
        updateUser,
        login,
        logOut,
        loading,
        providerLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;