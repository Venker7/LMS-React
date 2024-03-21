import React, { useEffect, useState } from "react";
import "./CseIssuebooks.css"
import axios from "axios";
export const CseIssuebooks = () => {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    axios.get('https://freetestapi.com/api/v1/books')
    .then(res=>{
      console.log(res)
      setPosts(res.data)
    })
    .catch(error=>{
      console.log(error)
    });
  },[])

  return <table className="listbooks">
                
      <thead className="book-header">
        <tr>
        <th>
          <div className="id">ID</div>
        </th>
        <th>
          <div className="title">Title</div>
        </th>
        <th>
          <div className="author">Author</div>
        </th>
        <th>
          <div className="date">Issued Date</div>
        </th>
        <th>
          <div className="till">Issued Till</div>
        </th>
        <th>
          <div className="byuser">Borrower/Regitration No.</div>
        </th>
        <th>
          <div className="action">Action</div>
        </th>
        </tr>
      </thead>
      <tbody>
        
        {posts.map(post => <tr key={post.id} className="books-row"><td><div className="book-id">{post.id}</div></td><td ><div className="book-title">{post.title}</div></td><td ><div className="book-author">{post.author}</div></td><td><div className="book-date">21/3/2024</div></td><td ><div className="book-till">30/3/2024</div></td><td><div className="book-byuser">Nongmaithem Venker Singh</div></td><td><button className="return-button">Return</button></td><td ><button className="renew-button">Renew</button></td></tr>)}
       
     </tbody>
         </table>;
};
