import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const deleteFn = async (req: Request, res: Response) => {
    var message:string = "default" ;
    try{
        // Get data from request
        const firstnameData:string = req.body.firstname;
        console.log(firstnameData);

        // Delete documents
        const response = await db.collection("Users").doc(firstnameData).delete()
        // .then(() => {
        //     console.log("Document successfully deleted!");
        // }).catch((error) => {
        //     console.error("Error removing document: ", error);
        // });

        console.log("response:", response);
        message = "success callDeleteData" ;

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
        message = "fail callDeleteData" ;
    }
    return res.send(message);
}

export {deleteFn}