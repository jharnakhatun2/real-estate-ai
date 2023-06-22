import app from 'context/firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    //Log Out 
    const logOut = ()=>{
        return signOut(auth);
    }
    // auth state observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user observing');
            setUser(currentUser);
        })
            return () => unsubscribe();
    },[])

    const authInfo ={
        createUser,
        signIn,
        user,
        updateUser,
        logOut,
        providerLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;