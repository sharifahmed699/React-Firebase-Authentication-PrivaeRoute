import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initiatizeAuthentication =()=>{
    initializeApp(firebaseConfig);
}

export default initiatizeAuthentication