import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const queryFn = async (req: Request, res: Response) => {
    var message:string = "default" ;
    try{
        // Read data
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
            // console.log(each.id, " => ", each.data().born);
        }

        // THEN CATCH
        // db.collection("Users")
        // .where("born", "==", 1815)
        // .where("dead", "!=", 9999).get()
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
        message = "success callReadData" ;

    }catch(e){
        console.log("e:", e);
        message = "fail callReadData" ;
    }
    return res.send(message);
}

const queryUserById = async (req: Request, res: Response) => {
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
        const response = await db.collection('ChatRooms').where("Id0001", "in", ["OwnerUserId", "ChatToUserId"]).get();
        if (response.size > 0 ){
            // result data -> cast to class
            const list = response.docs.map((doc) => {
                console.log(doc.data());
                return doc.data() as Classroom;
            }).filter(x=> x.firstname === '');
            console.log("response.each:", list);
            return list;
        }
        // return null;
        return res.send(response);

        // let rtndata = [];
        // for(const each of response.docs){
        //     console.log(each.id, " => ", each.data());
        //     rtndata.push(each.data());
        //     // console.log(each.id, " => ", each.data().born);
        // }
        // return rtndata;
        
    }catch(e){
        console.log("e:", e);
        throw new Error(e.message);
    }
}

export { queryFn, queryUserById };