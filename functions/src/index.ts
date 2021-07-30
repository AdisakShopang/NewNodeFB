import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import { Request, Response } from 'express';

import { upsertFn } from './methods/addData';
import { queryFn, queryUserById } from './methods/readData';
import { deleteFn } from './methods/deleteData';

// import * as aaa from './addData.js';

//ทำการ import express เข้ามาใช้งาน โดยสร้างตัวแปร express ขึ้นมาเพื่อรับค่า
const express = require('express')
// const bodyParser = require('body-parser');

//ทำการสร้าง Instance ของ express และสร้างตัวแปร app ขึ้นมาเพื่อรับค่า
const app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    express.urlencoded({
      extended: false
    })
  )

  app.use(express.json())

//สร้างตัวแปร PORT ขึ้นมารับค่า port ในกรณีที่เราได้กำหนดไว้ใน environment ของเครื่อง
//แต่ถ้าไม่ได้กำหนดไว้ เราจะใช้ค่า 8080 แทน
const PORT = process.env.PORT || 8080

//สร้าง route ขึ้นมา 1 ตัว โดยกำหนดให้ path คือ / หรือ index ของ host นั่นเอง
//จากนั้นให้กำหนด response แสดงคำว่า Hello World

app.post('/', (req:Request, res:Response) => res.send('Hello World'))
app.post('/sho', (req:Request, res:Response) => {
    // console.log(req);
    
    const tempParam = req.query.name;
    console.log(tempParam);

    console.log('TEST');
    console.log(req);
    console.log(req.body);
    // console.log(req.params);
    // console.log(req.query.body);
    const temp = req.body.firstname;
    
    return res.send('SHO123:'+temp + ' tempParam:'+tempParam);
})

app.post('/callAddData', async (req:Request, res:Response) => {
    // console.log(''upsertFn);
    await upsertFn();
    // var message:string = "success callAddData" ;
    const message = "success callAddData" ;
    return res.send(message);
})

app.get('/callreadData', async (req:Request, res:Response) => {
  // console.log(''queryFn);
  await queryFn();
  return res.send("success callreadData");
})

app.get('/callQueryUserById', async (req:Request, res:Response) => {
  // console.log(''queryFn);
  const response = await queryUserById();
  return res.send(response);
})

app.delete('/callDeleteData', async (req:Request, res:Response) => {
  // console.log(''queryFn);
  const firstnameData = req.body.firstname;
  console.log(firstnameData);
  await deleteFn(firstnameData);
  return res.send("success callDeleteData");
})

//run web server ที่เราสร้างไว้ โดยใช้ PORT ที่เรากำหนดไว้ในตัวแปร PORT
app.listen(PORT, () => {
    //หากทำการ run server สำเร็จ ให้แสดงข้อความนี้ใน cmd หรือ terminal
    console.log(`Server is running on port : ${PORT}`)
})
//ทำการ export app ที่เราสร้างขึ้น เพื่อให้สามารถนำไปใช้งานใน project อื่นๆ 
//เปรียบเสมือนเป็น
module.exports = functions.region('us-central1').https.onRequest(app);
