// const firebase = require("firebase");

// Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
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

// Read data
const queryFn = async () => {
    try{
        // var usersRef = db.collection("Users").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //     });
        // });

        const response = await db.collection("Users")
        .where("born", "==", 1815)
        .where("dead", "!=", 9999).get()
        // FOR EACH
        // response.forEach((doc) => {
        //             // doc.data() is never undefined for query doc snapshots
        //             console.log(doc.id, " => ", doc.data());
        //             console.log(doc.id, " => ", doc.data().born);
        //         });
        // FOR CONST
        for(const each of response.docs){
            console.log(each.id, " => ", each.data());
            console.log(each.id, " => ", each.data().born);
        }

        // TRY CATCH
        // .get()
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // })
        // .catch((error) => {
        //     console.log("Error getting documents: ", error);
        // });

        // console.log("response:", response);
        // console.log("response:", response.docs);

    }catch(e){
        console.log("e:", e);
    }
}

const queryUserById = async () => {
    try{

        // let response = await db.collection("Users").doc('111').get()
        // // FOR CONST
        // // for(const each of response.docs){
        // //     console.log(each.id, " => ", each.data());
        // //     console.log(each.id, " => ", each.data().born);
        // // }
        // if(response.exists){
        //     console.log("response.exists:", response.data());
        // }

        // console.log("response:", response);
        // console.log("response:", response.docs);

        // test db chat
        // results => 0 - N
        const response = await db.collection("ChatRooms ").where("Id0001", "in", ["OwnerUserId", "ChatToUserId"]).get();
        if (response.size > 0 ){
            // result data -> cast to class
            const list = response.docs.map((doc) => {
                console.log(doc.data());
                
                return doc.data() as Classroom;
            }).filter(x=> x.firstname === '');
            console.log("response.each:", list);
            return list;
            
        }
        let rtndata = [];
        for(const each of response.docs){
            console.log(each.id, " => ", each.data());
            rtndata.push(each.data());
            // console.log(each.id, " => ", each.data().born);
        }
        return rtndata;
        
    }catch(e){
        console.log("e:", e);
        throw new Error(e.message);
    }
}

export {queryFn, queryUserById}