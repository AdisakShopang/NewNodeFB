const express = require('express');
const router = express.Router();

import { upsertFn } from "../../controllers/addDataController";
import { deleteFn } from "../../controllers/deleteDataController";
import { queryFn, queryUserById } from "../../controllers/readDataController";

import { dynamicAddData } from "../../controllers/addDataDynamicController";
import { dynamicReadData } from "../../controllers/readDataDynamicController";
import { dynamicDeleteData } from "../../controllers/deleteDataDynamicController";
import * as userMethods from "../../controllers/userController";

// ROUTER PATH
router.post("/callAddData", upsertFn);
router.get("/callReadData", queryFn);
router.get("/callQueryUserById", queryUserById);
router.delete("/callDeleteData", deleteFn);

router.post("/dynamicAddData", dynamicAddData);
router.get("/dynamicReadData", dynamicReadData);
router.delete("/dynamicDeleteData", dynamicDeleteData);

router.post("/users/:userid", userMethods.createUser);
router.put("/users/:userid", userMethods.updateUser);
router.delete("/users/:userid", userMethods.deleteUser);

export {
    router 
};