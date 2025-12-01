import React from 'react'
import selfSkill from '../assets/selfSkill.png'
import aiBot from '../assets/images.png'
import { useNavigate } from 'react-router-dom'
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
function Home() {

const nav = useNavigate()
  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center '>

      <p className='text-2xl mt-10 font-bold'>Welcome to EdTech Media</p>
      <div className='h-[40%] w-[80%] flex bg-amber-100 justify-between m-10 '>
            <div className='mt-20 ml-15'>
            <p className='text-5xl font-black text-shadow-lg'>ED Tech Media 
            </p>
                
              <p className='text-lg ml-28'>
                  -Upskill with self learning
                </p>
                
           
           
            <button className='my-15 mx-30 rounded shadow-2xl shadow-sky-500 text-center h-[30px] w-[100px] bg-sky-200' onClick={()=>nav('/signup')}>join now </button><span>&nbsp;&nbsp;&nbsp;</span>
            
            </div>
            <img src={selfSkill} alt={selfSkill} height={350} width={350}/>
            <div className='bg-green-300 h-10 w-30 justify-self-end flex justify-center items-center'>

            <button className='text-lg font-bold' >dashboard&nbsp;</button>
            <HiOutlineSquare3Stack3D />
            </div>
      </div>
      <div className='bg-pink-100 h-[40%] w-[80%] flex justify-between'>
<div>
    <p><span className='font-bold text-2xl ml-1.5'>About:</span></p>
    <p className='ml-1.5 mt-1.5'>YouTube University is a next-gen EdTech platform built to make quality education accessible to everyone, anywhere. Our mission is simple: Learn for free, prove your skills with certification.</p>
    <p className='ml-1.5'>We curate the best YouTube content into structured learning roadmaps across multiple domains — from tech stacks like MERN, Data Science, and DevOps to non-tech skills like Communication, Design, and Entrepreneurship.</p>
    <p  className='ml-1.5'>💡 How it works:</p>
    <ul  className='ml-2.5'>
      <li>Learn at your own pace through curated YouTube lectures.</li>
      <li>Connect with peers, share ideas on the blog page, and collaborate through our chat system.</li>
      <li>Get guided by our built-in AI Mentor, ready to solve your doubts instantly.</li>
      <li>When you’re ready, take our virtual test & interview to earn an industry-recognized certificate (paid option).</li>
    </ul >
    <p className='ml-1.5'>
      We believe knowledge should be free, but validation should be earned. Whether you’re here to learn new skills, network with like-minded learners, or showcase your expertise — YouTube University is your launchpad.
    </p>
</div>
<div className=' self-end border border-blue-300 shadow shadow-2xl shadow-blue-800 rounded-4xl  w-40 min-h-20  font-black flex  flex-col justify-center items-center mr-2 mb-1 bg-white' ><p>ai bot</p>
<img src={aiBot} height={60} width={70}/>
</div>
      </div>
    </div>
  )
}

export default Home
