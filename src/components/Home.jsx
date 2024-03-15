import { AddBooks } from "./AddBooks";
import { Checkbooks } from "./Checkbooks";
import { Dashboard } from "./Dashboard";
import { SideNav } from "./SideNav";
import { Routes,Route } from "react-router-dom";
import "./Home.css"
import { IssuedBooks } from "./IssuedBooks";


export const Home = () => {
  return <div>
    <SideNav/>
   <Routes>
    <Route path='/home/dashboard'  element={<Dashboard/>}/>
    <Route path='/home/addbooks'element={<AddBooks/>}/>
    <Route path='/home/checkbooks' element={<Checkbooks/>}/>
    <Route path='/home/issuedbooks' element={<IssuedBooks/>}/>

   </Routes>
  </div>;
};
