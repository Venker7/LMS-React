import React, { useEffect, useState } from "react";
import "./ReturnBooklist.css"
import axios from "axios";
export const ReturnBooklist = () => {
  const [returns,setReturn]=useState([]);
  useEffect(()=>{
    axios.get('https://freetestapi.com/api/v1/books')
    .then(res=>{
      console.log(res)
      setReturn(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
  },[])
  return <table className="returnbooklist">
          <thead className="return-header">
            <tr>
            <th>
              <div className="return-ID">BookID</div>
            </th>
            <th>
              <div className="return-bookname">BookName</div>
            </th>
            <th>
              <div className="return-user">User</div>
            </th>
          </tr></thead>
          <tbody className="return-body">
            {returns.map(Return => <tr key={Return.id}className="return-books-row"><td><div className="return-id">{Return.id}</div></td><td ><div className="return-title">{Return.title}</div></td><td><div>Rohit</div></td></tr>)}
          </tbody>
         </table>;
};
