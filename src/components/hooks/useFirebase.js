import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect, useNavigate } from "react-router-dom";




initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const googleProvider=new GoogleAuthProvider();
    const auth=getAuth();
    const navigate=useNavigate();

   const signinUsingGoogleforTeacher=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user);
        navigate('/courselist');
    }).catch(err=>{
        setError(err.message);
    })
    
   }

   const signinUsingEmailPassword=(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user);
        navigate('/courselist');
    }).catch(err=>{
        setError(err.message);
    })
}

   const signinUsingGoogleforStudent=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user);
        navigate('/stucourselist');
    }).catch(err=>{
        setError(err.message);
    })

    
   }
   const logout=()=>{
    signOut(auth)
    .then(()=>{
        setUser({});
        navigate('/');
    })
   }

   useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
   },[])

    return {
        signinUsingGoogleforTeacher,
        signinUsingGoogleforStudent,
        signinUsingEmailPassword,
        user,
        setUser,
        error,
        logout
    }
}

export default useFirebase;