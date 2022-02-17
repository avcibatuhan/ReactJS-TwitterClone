// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from "firebase";
import firebase from "firebase/compat/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "PASTE HERE":"YOUR FIREBASE CONFIG CONSTANT VARIABLE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const analytics = getAnalytics(firebaseApp);

export default db;