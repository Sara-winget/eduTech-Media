import React from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { useState } from 'react';
function Login() {
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [open,setOpen]=useState(false)
  const [close,setClose]=useState(true)
  const [type,setType]=useState('password')
  const eyeOpen=()=>{
    setClose(true)
    setOpen(false)
    setType('password')
  }
  const eyeClose=()=>{
    setClose(false)
    setOpen(true)
    setType('text')
  }
  const login=(e)=>{
    e.preventDefault();
    console.log('login sucessful')
  }
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-slate-100 '>
      <div className='flex flex-col justify-center items-center  m-auto rounded-lg shadow-2xl  h-screen md:h-1/3 sm:h-1/4 md:w-1/2 w-full  shadow-gray-400 bg-neutral-100'>
        <div className='m-5'>
          <p className='text-4xl font-bold text-shadow-lg'>Login page!!!</p> 
        </div>

        <div className='w-1/2 h-1/12  mt-5 rounded-lg shadow-2xl bg-slate-300 flex flex-row'>
           <input className='text-center' type='text ' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <IoMail className='self-center ml-4' size={40}/>
        </div>
        <div className='w-1/2 h-1/12  mt-10 rounded-lg shadow-2xl bg-slate-300 flex flex-row'>
           <input className='text-center' type={type} placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
           {
            open && <LuEye onClick={eyeOpen} className='self-center ml-4' size={40}/>
           }
           {
            close  && <LuEyeClosed onClick={eyeClose} className='self-center ml-4' size={40}/>
           }

        </div>
             <div className='mt-15 w-1/4 h-1/11  box-border rounded-lg shadow-2xl bg-gray-200 flex justify-center-safe items-center' onClick={login}>
               <span className='text-xl font-bold text-shadow-lg text-center p-5' >Login</span>
             </div>
        <div className='m-5 w-full self-start  flex justify-around mt-10'>
          <span className='text-base text-red-300'>Forgot password ?</span> 
          <p >Dont have an account ? <span className='text-cyan-400'>Sign up</span></p> 
        </div>
      </div>
    </div>
  )
}

export default Login
