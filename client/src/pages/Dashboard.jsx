import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='flex min-h-screen w-full border justify-between'>
         
      <div className='h-[75%] w-[30%] bg-amber-300 border flex flex-col m-10 text-center p-4 box-content'>
            <div>My dashboard</div>
            <hr></hr>
            <Link to={"./courses"}>Courses</Link>
            <hr/>
            <Link to={"./blog"}>Blog</Link>
            <hr></hr>
            <Link to={"./myCertificate"}>my certificates</Link>
            <hr/>
            <Link to={"./askAi"}>ask-ai</Link>
            <hr/>
            <Link to={"./notification"}>Notification</Link>
            <hr/>
            <Link to={"./myNetwork"}>My network</Link>
            <hr></hr>
            <Link to={"./jobSearch"}>job search</Link>
            <hr/>
            <Link to={"./setting"}>settings</Link>
      </div>
      <div>
            <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard

