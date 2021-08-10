import { db } from '../configs/configFirestore';
import { Request, Response } from "express";

const dynamicReadData = async (req: Request, res: Response) => {
    let message:string = "default" ;
    try{
        // Get data from request
        const collectionName:string = req.body.collectionName;

        const conditionField1:string = req.body.conditionField1;
        const conditionField2:string = req.body.conditionField2;

        const conditionOperation1:FirebaseFirestore.WhereFilterOp = req.body.conditionOperation1;
        const conditionOperation2:FirebaseFirestore.WhereFilterOp = req.body.conditionOperation2;

        const bornData:string = req.body.born;
        const deadData:string = req.body.dead;

        const test = db.collection(collectionName)
        .where(conditionField1, conditionOperation1, bornData)
        .where(conditionField2, conditionOperation2, deadData);
        // Read data
        const response = await test.get();

        // FOR CONST
        const list:FirebaseFirestore.DocumentData = [];
        for(const each of response.docs){
            console.log(each.id, " => ", each.data());
            list.push(each.data());
            // console.log(each.id, " => ", each.data().born);
        }

        return res.send(list);

    }catch(e){
        console.log("e:", e);
        message = "fail callReadData" ;
    }
    return res.send(message);
}

export { 
    dynamicReadData 
};