/* eslint-disable */
import Firebase from "firebase";
var config = {
    apiKey: "AIzaSyDLW28ig83t3MkGlZFXXNaIQTgCcf-cQ2k",
    authDomain: "ucsd-jsa.firebaseapp.com",
    databaseURL: "https://ucsd-jsa.firebaseio.com",
    projectId: "ucsd-jsa",
    storageBucket: "ucsd-jsa.appspot.com",
    messagingSenderId: "784662637069"
}

export const firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.database()
