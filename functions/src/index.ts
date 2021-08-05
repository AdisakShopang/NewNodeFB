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

const api = functions.region(`asia-east2`).https.onRequest(app);

export { 
  api 
};
