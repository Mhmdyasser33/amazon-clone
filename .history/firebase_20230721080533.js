import {}from 'firebase/app'
const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_APP_API_KEY,
    authDomain:process.env.REACT_FIREBASE_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_FIREBASE_APP_PROJECT_ID ,
    storageBucket:process.env.REACT_FIREBASE_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_FIREBASE_APP_API_KEY_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_FIREBASE_APP_API_KEY_APP_ID ,

  };