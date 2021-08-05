import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const deleteFn = async (req: Request, res: Response) => {
    let message:string = "default" ;
    try{
        // Get data from request
        const docIdData:string = req.body.docId;
        console.log(docIdData);

        // Delete documents
        // const response = await db.collection("Users").doc(docIdData).delete();
        // .then(() => {
        //     console.log("Document successfully deleted!");
        // }).catch((error) => {
        //     console.error("Error removing document: ", error);
        // });

        // Delete all with condition
        const resultData = await db.collection("Users").where('born', 'not-in', [1815,1915]).get();
        // const resultData = await db.collection("Users").where('arrayField', 'array-contains', '18').get();
        // console.log(resultData);
        for(let index = 0 ; index < resultData.size ; index++){
            console.log("data : ", resultData.docs[index].data());
        };

        for(const each of resultData.docs){
            console.log(each.id, " => ", each.data());
            const deletedRes = await db.doc(`Users/${each.id}`).delete();
            console.log("deletedRes : ", deletedRes);
        }

        // Delete with Batch firebase
        // const batch = db.batch();
        // batch.delete();
        // await batch.commit();

        // const documentSnapshotArray = await db.collection("Users").where('born', 'not-in', [1815,1915]).get();

        // let batchArray:FirebaseFirestore.WriteBatch[] = [];
        // batchArray.push(db.batch());
        // let operationCounter = 0;
        // let batchIndex = 0;

        // documentSnapshotArray.forEach(documentSnapshot => {
        //     const documentData = documentSnapshot;

        //     batchArray[batchIndex].delete(documentData.ref);
        //     operationCounter++;

        //     if (operationCounter === 499) {
        //     batchArray.push(db.batch());
        //     batchIndex++;
        //     operationCounter = 0;
        //     }
        // });
        // batchArray.forEach(async batch => await batch.commit());

        // console.log("response:", response);
        message = "success callDeleteData" ;

        // // Delete fields
        // var userRef = db.collection('Users').doc('222');
        // Remove the 'born' field from the document
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