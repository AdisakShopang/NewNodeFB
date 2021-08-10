import { db } from '../configs/configFirestore';
import { createBatch, updateBatch, deleteBatch } from '../services/batch.service';

// CREATE
const createUserById = async (userId: string, arrayData: newUserData[]) => {
    console.log('userId : ' + userId);
    console.log('arrayData : ' + JSON.stringify(arrayData));
    
    const userRef = db.collection("Users");
    return createBatch(userRef, arrayData);
}

// UPDATE
const updateUserById = async (userId: string) => {
    const query = db.collection("Users").where('ref', '==', userId);
    return updateBatch(query);
}

// DELETE
const deleteUserById = async (userId: string) => {
    const query = db.collection("Users").where('ref', '==', userId);
    return deleteBatch(query);
}

export {
    createUserById,
    updateUserById,
    deleteUserById
};