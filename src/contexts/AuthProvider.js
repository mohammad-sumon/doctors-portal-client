import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // user notun kore create korar jonno
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // create kora user er login korar jonno
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // user create korar por tar profile name ba photo url dekhanor jonno
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    // user k log out korar jonno
    const logOut = () => {
        return signOut(auth);
    }

    // jokhon kono user login hobe tokhon ekta observer set korbo jate se user er sob activity nozor e rakhte pare.
    // sejonno age amra upore ekta [user, setUser] nam e state declare korbo. and sei 'user' k authInfo er moddhe pathiye dite hobe.
    // tarpor amra useEffect er moddhe onAuthStateChanged method use korbo.
    // akhon amra jodi chai je navbar e jei current user thakbe tar jekono information dekhabo, setao korte pari conditional way te.

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user obserbing');
            setUser(currentUser);
        });
        
        return () => unsubscribe();
        
    }, [])


  const authInfo = {
    createUser,
    signIn,
    updateUser,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
