// const firebase = require("firebase");

// // Required for side-effects
// require("firebase/firestore");

// // Initialize Cloud Firestore through Firebase
// const apiKeyValue = 'AIzaSyDk8XoVAPr1AHUA0bau_1JHnkFILBNpAc4';
// const authDomainValue = 'projecttest-b4da4.firebaseapp.com';
// const projectIdValue = 'projecttest-b4da4';
// firebase.initializeApp({
//     apiKey: apiKeyValue,
//     authDomain: authDomainValue,
//     projectId: projectIdValue
// });
  
// var db = firebase.firestore();

import { db } from '../configs/configFirestore';
// import * as functions from "firebase-functions";

// // Add data
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

// Add a second document with a generated ID.
// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

const upsertFn = async () => {
    try{
        // random document id
        const docId = db.collection("Users").doc().id;
        const response = await db.collection("Users").doc(docId).set({
            first: "Fname",
            middle: "Mname",
            last: "Lname",
            born: 1815,
            dead: 1995
        }, { merge: true })
        console.log("response:", response);

    }catch(e){
        console.log("e:", e);
    }
}
export {upsertFn};