import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-gradient-to-r from-zinc-200 to-blue-100'>
      <div className='w-[500px] p-10 rounded-2xl shadow-2xl bg-indigo-200 flex flex-col items-center gap-5'>

        <p className='text-3xl font-bold text-gray-700 mb-2'>Sign Up to Ed-Tech-Media!!</p>

        {/* Username */}
        <div className='flex items-center w-full bg-sky-100 rounded-2xl px-4 shadow-inner'>
          <input
            type='text'
            placeholder='Username'
            className='w-full bg-transparent outline-none py-3 text-center text-gray-700'
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="off"
          />
          <FaUser className='text-gray-600 ml-2' size={22} />
        </div>

        {/* Email */}
        <div className='flex items-center w-full bg-sky-100 rounded-2xl px-4 shadow-inner'>
          <input
            type='email'
            placeholder='Email'
            className='w-full bg-transparent outline-none py-3 text-center text-gray-700'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            autoComplete="off"
          />
          <IoMdMail className='text-gray-600 ml-2' size={22} />
        </div>

        {/* Password */}
        <div className='flex items-center w-full bg-sky-100 rounded-2xl px-4 shadow-inner'>
          <input
            type={show ? 'text' : 'password'}
            placeholder='Password'
            className='w-full bg-transparent outline-none py-3 text-center text-gray-700'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete="off"
          />
          {show
            ? <LuEyeOff className='text-gray-600 ml-2 cursor-pointer' size={22} onClick={() => setShow(false)} />
            : <LuEye className='text-gray-600 ml-2 cursor-pointer' size={22} onClick={() => setShow(true)} />
          }
        </div>

        {/* Sign up button */}
        <button
          className='bg-amber-300 hover:bg-amber-400 transition-all duration-300 rounded-xl px-6 py-2 mt-4 font-semibold text-gray-800 shadow-md hover:shadow-lg'
        >
          Sign Up
        </button>

        {/* Footer text */}
        <div className='mt-3 text-sm'>
          <span className='text-gray-600'>Already have an account? </span>
          <span className='text-sky-600 hover:underline cursor-pointer' onClick={()=>navigate('/login')}>Login</span>
        </div>

      </div>
    </div>
  )
}

export default Signup
