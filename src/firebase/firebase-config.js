import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBL_jboGQMgmlMcqigO0jEiQgqG9ISqZqk",
    authDomain: "react-apps-e7f2a.firebaseapp.com",
    databaseURL: "https://react-apps-e7f2a.firebaseio.com",
    projectId: "react-apps-e7f2a",
    storageBucket: "react-apps-e7f2a.appspot.com",
    messagingSenderId: "998341192332",
    appId: "1:998341192332:web:658d51733d7499378da9a9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}