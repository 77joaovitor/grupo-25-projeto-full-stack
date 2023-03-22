import {
  Home,
  DetailAnnouncement,
  Profile,
  Register,
  ProfileAdmin,
  Login,
  Recovery,
  Error
} from "../pages";
import { Route, Routes } from "react-router-dom";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announcement/" element={<DetailAnnouncement />} />
      <Route path="/profile/" element={<Profile />} />
      <Route path="/register/" element={<Register />} />
      <Route path="/profile/:admin?" element={<ProfileAdmin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recovery" element={<Recovery />} />
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}

      <Route path='/error' element={<Error/>}/>
    </Routes>
  );
};

export default RoutesMain;
