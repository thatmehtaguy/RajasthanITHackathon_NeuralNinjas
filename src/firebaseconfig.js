// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpKfs4Tbb8i3Z19DmSY5yY8z4Xd32wDk4",
  authDomain: "hyperledger-blockchain-5cb5c.firebaseapp.com",
  projectId: "hyperledger-blockchain-5cb5c",
  storageBucket: "hyperledger-blockchain-5cb5c.appspot.com",
  messagingSenderId: "152799391272",
  appId: "1:152799391272:web:11c2b773379f9dbb10cf1d"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;