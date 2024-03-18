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
      <Route index path='/home/issuedbooks'element={<CseIssuebooks/>}/>
      <Route path='/home/issuedbooks/electrical' element={<EEissuedbooks/>}/>     
      <Route path='/home/issuedbooks/electronics' element={<ECEissuedbooks/>}/>
      <Route path='/home/issuedbooks/civil' element={<CEissuedbooks/>}/>
      <Route path='/home/issuedbooks/mechanical' element={<MEissuedbooks/>}/>
      <Route path='/home/issuedbooks/basicscience' element={<BSissuedbooks/>}/>
      <Route path='/home/issuedbooks/humanscience' element={<HSissuedbooks/>}/>


    </Route>

   </Routes>
  </div>;
};
