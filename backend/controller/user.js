import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import ErrorHandler from '../utils/errorHandler.js'


export const register = async(req,res,next)=>{
   const {user,email,pass}=req.body
   if(!user || !email || !pass)
    return next(new ErrorHandler("user,email,pass required",400))
   const findEmail = await User.findOne({email})
   
   if(findEmail)
    return next(new ErrorHandler("user already exist",400))

   const password= await bcrypt.hash(pass,10)

   const newUser = await User.create({user,mail:email,password})

   res.status(201).json({message:newUser})


}