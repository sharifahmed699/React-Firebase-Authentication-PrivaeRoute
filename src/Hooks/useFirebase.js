import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initiatizeAuthentication from '../Firebase/Firebae.init';


initiatizeAuthentication()

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error ,setError] = useState('')
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user)
        }).catch((error) => {
            setError(error.message)
        });
    }
    
    const logOut = ()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
          })
    },[])

    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase