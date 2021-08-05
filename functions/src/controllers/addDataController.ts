import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const upsertFn = async (req: Request, res: Response) => {
    let message:string = 'default';
    try{
        // random document id
        const docId = db.collection("Users").doc().id;
        const response = await db.collection("Users").doc(docId).set({
            ref: docId,
            first: "Fname",
            middle: "Mname",
            last: "Lname",
            born: 1815,
            dead: 1995
        }, { merge: true })

        console.log("response:", response);
        message = "success callAddData" ;

    }catch(e){
        console.log("e:", e);
        message = "fail callAddData" ;
    }
    return res.send(message);
}

export {upsertFn};