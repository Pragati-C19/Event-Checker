/* 
    1. Go to firebase console 
    2. Add a Project
    3. go to web icon <> and create api
    4. copy the sdk code from second step of creating app
*/

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSdUKr03QQ2gn3dq1FVOtvpJFbOkT3FjY",
  authDomain: "event-checker-bd4ad.firebaseapp.com",
  projectId: "event-checker-bd4ad",
  storageBucket: "event-checker-bd4ad.appspot.com",
  messagingSenderId: "726116740988",
  appId: "1:726116740988:web:fc82743d9e247ccecc3ef9",
  measurementId: "G-JD9Y6JQKPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result) this will show all information of user
      const userName = result.user.displayName;
      const userEmailId = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("username", userName);
      localStorage.setItem("email_id", userEmailId);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutWithGoogle = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign Out")
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    });
};



