import React from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    console.log('login successful')
  }
  const nav=useNavigate()

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-slate-100'>
      <div className='flex flex-col justify-center items-center m-auto rounded-xl shadow-2xl md:h-[70%] h-screen md:w-[40%] w-[90%] shadow-gray-400 bg-neutral-100 px-8 py-10'>

        <div className='mb-6'>
          <p className='text-3xl font-bold text-gray-800 text-center'>Login Page - Ed-Tech Media !!!</p>
        </div>

        {/* Email Input */}
        <div className='w-full md:w-3/4 h-12 mt-4 rounded-lg shadow-md bg-slate-200 flex items-center px-4'>
          <input
            className='flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 text-base'
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <IoMail className='text-gray-600 mr-3' size={24}/>
        </div>

        {/* Password Input */}
        <div className='w-full md:w-3/4 h-12 mt-8 rounded-lg shadow-md bg-slate-200 flex items-center px-4'>
          <input
            className='flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 text-base'
            type={type}
            placeholder='Password'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
          />
          {open && <LuEye onClick={eyeOpen} className='text-gray-600 cursor-pointer' size={24}/>}
          {close && <LuEyeClosed onClick={eyeClose} className='text-gray-600 cursor-pointer' size={24}/>}
        </div>

        {/* Login Button */}
        <div
          className='mt-10 w-1/2 py-3 rounded-lg shadow-md bg-gray-300 hover:bg-gray-400 transition-all duration-200 flex justify-center items-center cursor-pointer'
          onClick={login}
        >
          <span className='text-xl font-bold text-gray-800'>Login</span>
        </div>

        {/* Footer */}
        <div className='mt-8 w-full flex justify-between items-center px-5 text-sm'>
          <span className='text-red-400 cursor-pointer hover:underline'>Forgot password?</span>
          <p className='text-gray-600'>
            Don’t have an account?{' '}
            <span
              className='text-cyan-500 font-semibold cursor-pointer hover:underline'
              onClick={()=>nav('/signup')}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
