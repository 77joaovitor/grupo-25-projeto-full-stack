import { Home, DetailAnnouncement, Profile, Register } from "../pages";
import { Route, Routes } from 'react-router-dom'

const RoutesMain = () => {

  return ( 
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/announcement/' element={<DetailAnnouncement />}/>
        <Route path='/profile/' element={<Profile />}/>
        <Route path='/signup/' element={<Register />}/>
          {/* <Route path='/' element={<Login/>}/> */}
          {/* <Route path='/register' element={<Register/>}/> */}
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}

         {/* <Route path='/error' element={<Error/>}/> */}
    </Routes>
  )
}

export default RoutesMain;