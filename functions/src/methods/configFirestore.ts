// import * as firebase from "firebase";
import firebase from 'firebase';

// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
const apiKeyValue = 'AIzaSyD1xMeaECuDh13G_aUvC13a4YDTsLpIB94';
const authDomainValue = 'chattest-ffcac.firebaseapp.com';
const projectIdValue = 'chattest-ffcac';
firebase.initializeApp({
    apiKey: apiKeyValue,
    authDomain: authDomainValue,
    projectId: projectIdValue
});
  
const db = firebase.firestore();
export { db };