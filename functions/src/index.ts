// LOCALHOST SERVER
import * as functions from "firebase-functions";
import { apiRouter } from './routers'
import { Request, Response } from 'express';

const express = require("express");
const app = express();
// const PORT = process.env.PORT || 8080

app.use(apiRouter);
app.all('*', (req: Request, res: Response) => {
  const code: number = 404;
  const result: any = {
      status_code: code,
      success: false,
      error: {
          message: "Req not found"
      }
  };
  // customLogging(req, result)
  return res.status(code).send(result);
})

// app.listen(PORT, () => {
//     console.log(`Server is running on port : ${PORT}`);
// });

// import { Request, Response } from "express";

// app.post("/", (req: Request, res: Response) => res.send("Hello World"));
// app.post("/sho", (req: Request, res: Response) => {
//   // console.log(req);

//   const tempParam = req.query.name;
//   console.log(tempParam);

//   console.log("TEST");
//   // console.log(req);
//   // console.log(req.body);
//   // console.log(req.params);
//   // console.log(req.query.body);
//   // const temp = req.body.firstname;
//   // console.log(temp);

//   return res.send("sho DONE");
// });

const api = functions.region(`asia-east2`).https.onRequest(app);

export { api };
