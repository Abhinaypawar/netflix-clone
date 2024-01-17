import { createContext, useContext, useEffect, useState } from "react"

import {
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut ,
     onAuthStateChanged,
    } from 'firebase/auth'
import {auth,db} from '../services/firebase';
import {doc,setDoc} from 'firebase/firestore'
// import{  favShows} from '../pages/Profile'



const AuthContext=createContext();

export function AuthContextProvider({children}){
    const [user, setUser]=useState(null);

    useEffect (()=>{

        const unsubscribe=onAuthStateChanged(auth,(CurrentUser)=>{
          setUser(CurrentUser)
        })

        return()=>{
            unsubscribe();
        }
    },[])

     function signUp(email,password){
        
        createUserWithEmailAndPassword(auth, email,password)
        .then(res=>{setUser(res.user)})
      
        setDoc(doc(db, "users",email),{
            favShows:[],
        });

          

    }

    function logIn(email,password){

        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{setUser(res.user)})
    }

    function logOut(){
        return signOut(auth)
    }
   
    // console.log(user)
    return <AuthContext.Provider value={{user,signUp,logIn,logOut}} > {children} </AuthContext.Provider>

}
export function UserAuth(){
    return useContext(AuthContext)
}