import {Login,Signup,Home,Dashboard,Courses,Blog,MyCertificate,AskAi,Notification,MyNetwork,JobSearch,Setting} from './Routes'
import { Route,Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
     <Routes>
      <Route path='/'element={<Home/>}/>
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/dashboard' element={<Dashboard/>}>
     <Route path='courses' element={<Courses/>}/>
     <Route path='blog' element={<Blog/>}/>
     <Route path='myNetwork' element={<MyNetwork/>}/>
     <Route path='askAi' element={<AskAi/>}/>
     <Route path='notification' element={<Notification/>}/>
     <Route path='myCertificate' element={<MyCertificate/>}/>
     <Route path='jobSearch' element={<JobSearch/>}/>
     <Route path='setting' element={<Setting/>}/>
     </Route>
     </Routes>
         
    </>
  )
}

export default App
