import { AddBooks } from "./AddBooks";
import { Checkbooks } from "./Checkbooks";
import { Dashboard } from "./Dashboard";
import { SideNav } from "./SideNav";
import { Routes,Route } from "react-router-dom";
import "./Home.css"
import { IssuedBooks } from "./IssuedBooks";
import { useState } from "react";
import { CseIssuebooks } from "./Issuebooks/CseIssuebooks";
import { EEissuedbooks } from "./Issuebooks/EEissuedbooks";
import { ECEissuedbooks } from "./Issuebooks/ECEissuedbooks";
import { CEissuedbooks } from "./Issuebooks/CEissuedbooks";
import { BSissuedbooks } from "./Issuebooks/BSissuedbooks";
import { MEissuedbooks } from "./Issuebooks/MEissuedbooks";
import { HSissuedbooks } from "./Issuebooks/HSissuedbooks";
import { MMissuedbooks } from "./Issuebooks/MMissuedbooks";



export const Home = () => {
  const [totalbooks,setTotalbooks]=useState(0);
function handletotalbooks(newCount){
  setTotalbooks(newCount);
}
  return <div>
    <SideNav/>
   <Routes>
    <Route path='/'  element={<Dashboard totalbooks={totalbooks}/>}/>
    <Route path='/home/addbooks'element={<AddBooks onButtonClick={handletotalbooks}/>}/>
    <Route path='/home/checkbooks' element={<Checkbooks />}/>
    <Route path='/home/issuedbooks' element={<IssuedBooks/>}>
      <Route path='computer' element={<CseIssuebooks/>}/>
      <Route path='electrical' element={<EEissuedbooks/>}/>     
      <Route path='electronics' element={<ECEissuedbooks/>}/>
      <Route path='civil' element={<CEissuedbooks/>}/>
      <Route path='mechanical' element={<MEissuedbooks/>}/>
      <Route path='basicscience' element={<BSissuedbooks/>}/>
      <Route path='humanscience' element={<HSissuedbooks/>}/>
      <Route path='management' element={<MMissuedbooks/>}/>
    </Route>

   </Routes>
  </div>;
};
