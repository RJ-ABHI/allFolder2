import React from "react";

import firebaseConfig from "./firebase";

import Firebase from "firebase";

export const authModels = {
  signUp: (email, password) => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signin: (email, password) => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signout: (email, password) => {}
};
