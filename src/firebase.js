import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyB53fxh5_HwrjYi4oHgeYb9EKRQgyg-sTM",
  authDomain: "authntication-abhi.firebaseapp.com",
  projectId: "authntication-abhi",
  storageBucket: "authntication-abhi.appspot.com",
  messagingSenderId: "754468113132",
  appId: "1:754468113132:web:a1b1324d6c422f7907b3c9",
  measurementId: "G-HMB7TKCVXK"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
firebase.analytics();
firebase.auth();
export default firebaseConfig;
