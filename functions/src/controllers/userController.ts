
import { Request, Response } from "express";
import { createUserById, updateUserById, deleteUserById } from "../modules/user.module";

const createUser = async (req: Request, res: Response) => {
    let message: string = 'default';
    try {
        // Get data from request
        let arrayData: newUserData[] = [];
        for(const data of req.body){
            const temp = {
                ref: data.ref,
                first: data.firstname,
                last: data.lastname,
                born: data.born,
                dead: data.dead,
                age: data.age
            } as newUserData;
            arrayData.push(temp);
        }
        
        const result = await createUserById(req.body.ref, arrayData);
        console.log('result', result);

        return res.send(result);

    } catch (e) {
        console.log("e:", e);
        message = "fail callAddData";
    }
    return res.send(message);
}

const updateUser = async (req: Request, res: Response) => {
    let message: string = 'default';
    try {
        const result = await updateUserById(req.params.userid);
        console.log('result', result);

        return res.send(result);

    } catch (e) {
        console.log("e:", e);
        message = "fail callAddData";
    }
    return res.send(message);
}

const deleteUser = async (req: Request, res: Response) => {
    let message: string = 'default';
    try {
        const result = await deleteUserById(req.params.userid);
        console.log('result', result);

        return res.send(result);

    } catch (e) {
        console.log("e:", e);
        message = "fail callAddData";
    }
    return res.send(message);
}

export {
    createUser,
    updateUser,
    deleteUser
};