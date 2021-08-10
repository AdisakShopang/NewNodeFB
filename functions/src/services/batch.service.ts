import { db } from '../configs/configFirestore';

const createBatch = async (userRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>, arrayData: newUserData[]) => {
    try {
        let batchArray: FirebaseFirestore.WriteBatch[] = [];
        batchArray.push(db.batch());
        let operationCounter = 0;
        let batchIndex = 0;

        for (const data of arrayData) {
            const randomDocId = userRef.doc().id;

            console.log(JSON.stringify(data));
            batchArray[batchIndex].set(userRef.doc(randomDocId),
                {
                    ref: randomDocId,
                    first: data.first,
                    last: data.last,
                    born: data.born,
                    dead: data.dead,
                    age: data.age
                }, { merge: true });
            operationCounter++;

            if (operationCounter === 499) {
                batchArray.push(db.batch());
                batchIndex++;
                operationCounter = 0;
            }
        };
        batchArray.forEach(async batch => await batch.commit());

        return 'DONE createBatch';

    } catch (e) {
        console.log("e:", e);
        return e;
    }

}

const updateBatch = async (query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>) => {
    try {
        const documentSnapshotArray = await query.get();

        if (documentSnapshotArray.size <= 0) {
            return 'Doc Id is not found';
        }

        let batchArray: FirebaseFirestore.WriteBatch[] = [];
        batchArray.push(db.batch());
        let operationCounter = 0;
        let batchIndex = 0;

        documentSnapshotArray.forEach(documentSnapshot => {
            const documentData = documentSnapshot;

            batchArray[batchIndex].update(documentData.ref,
                {
                    age: 1,
                    gender: 'M'
                }
            );
            operationCounter++;

            if (operationCounter === 499) {
                batchArray.push(db.batch());
                batchIndex++;
                operationCounter = 0;
            }
        });
        batchArray.forEach(async batch => await batch.commit());

        return 'DONE updateBatch';

    } catch (e) {
        console.log("e:", e);
        return e;
    }

}

const deleteBatch = async (query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>) => {
    try {
        const documentSnapshotArray = await query.get();

        if (documentSnapshotArray.size <= 0) {
            return 'Doc Id is not found';
        }

        let batchArray: FirebaseFirestore.WriteBatch[] = [];
        batchArray.push(db.batch());
        let operationCounter = 0;
        let batchIndex = 0;

        documentSnapshotArray.forEach(documentSnapshot => {
            const documentData = documentSnapshot;

            batchArray[batchIndex].delete(documentData.ref);
            operationCounter++;

            if (operationCounter === 499) {
                batchArray.push(db.batch());
                batchIndex++;
                operationCounter = 0;
            }
        });
        batchArray.forEach(async batch => await batch.commit());

        return 'DONE deleteBatch';

    } catch (e) {
        console.log("e:", e);
        return e;
    }

}

export {
    createBatch,
    updateBatch,
    deleteBatch
};