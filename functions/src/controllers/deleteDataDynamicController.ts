import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const dynamicDeleteData = async (req: Request, res: Response) => {
    let message:string = "default" ;
    try{
        // Get data from request
        const collectionName:string = req.body.collectionName;
        const docIdData:string = req.body.docId;
        console.log(docIdData);

        // Delete documents
        const response = await db.collection(collectionName).doc(docIdData).delete();

        console.log(response);
        message = "success dynamicDeleteData" ;

    }catch(e){
        console.log("e:", e);
        message = "fail dynamicDeleteData" ;
    }
    return res.send(message);
}

export {
    dynamicDeleteData
};