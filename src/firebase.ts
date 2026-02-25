import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log("API KEY =", import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
    apiKey: "AIzaSyD9mLkA7y-3FVcbzr9DUFuxy3RszA2HioU",
    authDomain: "furino-939f6.firebaseapp.com",
    projectId: "furino-939f6",
    storageBucket: "furino-939f6.appspot.com",
    messagingSenderId: "774104927596",
    appId: "1:774104927596:web:e6ffbfd30e1546c22f7749",
};


export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
