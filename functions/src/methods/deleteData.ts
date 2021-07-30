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

import { db } from './configFirestore';

const deleteFn = async (firstnameData:string) => {
    try{
        // Delete documents
        const response = await db.collection("Users").doc(firstnameData).delete()
        // .then(() => {
        //     console.log("Document successfully deleted!");
        // }).catch((error) => {
        //     console.error("Error removing document: ", error);
        // });

        console.log("response:", response);

        // // Delete fields
        // var userRef = db.collection('Users').doc('222');
        // // Remove the 'born' field from the document
        // var removeBornField = userRef.update({
        //     born: firebase.firestore.FieldValue.delete()
        // });
        // console.log('removeBornField:' + removeBornField);

        // Delete documents
        // Deleting collections from a Web client is not recommended.

    }catch(e){
        console.log("e:", e);
    }
}

export {deleteFn}