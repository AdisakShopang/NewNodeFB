import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const dynamicAddData = async (req: Request, res: Response) => {
    let message: string = 'default';
    try {
        // Get data from request
        const collectionName: string = req.body.collectionName;

        const firstnameData: string = req.body.firstname;
        const lastnameData: string = req.body.lastname;
        const bornData: string = req.body.born;
        const deadData: string = req.body.dead;
        const ageData: string = req.body.age;

        // random document id
        const docId = db.collection(collectionName).doc().id;
        const response = await db.collection(collectionName).doc(docId).set({
            ref: docId,
            first: firstnameData,
            last: lastnameData,
            born: bornData,
            dead: deadData,
            age: ageData
        }, { merge: true })

        console.log("response:", response);
        message = "success dynamicAddData";

    } catch (e) {
        console.log("e:", e);
        message = "fail dynamicAddData";
    }
    return res.send(message);
}

export {
    dynamicAddData
};