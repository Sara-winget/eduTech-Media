import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'
dotenv.config();
const app=express();
app.use(cors())
db()
const port = process.env.PORT || 3000

app.get('/',async(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}/`)
})


















