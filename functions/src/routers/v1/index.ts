const express = require("express");
const router = express.Router();

import { upsertFn } from "../../controllers/addDataController";
import { deleteFn } from "../../controllers/deleteDataController";
import { queryFn, queryUserById } from "../../controllers/readDataController";

// ROUTER PATH
router.post("/callAddData", upsertFn);
router.get("/callReadData", queryFn);
router.get("/callQueryUserById", queryUserById);
router.delete("/callDeleteData", deleteFn);

export { router };