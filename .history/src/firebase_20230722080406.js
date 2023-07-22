import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: AIzaSyDY0rRY0TN7FM2VAPNobyjjkoQn2mxK-wc,
    authDomain:process.env.REACT_FIREBASE_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_FIREBASE_APP_PROJECT_ID ,
    storageBucket:process.env.REACT_FIREBASE_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_FIREBASE_APP_API_KEY_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_FIREBASE_APP_API_KEY_APP_ID ,

  };
   // initialize firebase setup
  const app = initializeApp(firebaseConfig) ;
  const auth = getAuth(app) ;
  const db = getFirestore(app) ;
export {auth , db} ;

