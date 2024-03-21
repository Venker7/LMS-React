import React from "react";
import "./CseIssuebooks.css"
import axios from "axios";
export const EEissuedbooks = () => {
 


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
          <div className="byuser">Issued By</div>
        </th>

        </tr>
      </thead>
      <tbody>
        
        {/* {posts.map(post => <tr key={post.id} className="books-row"><td><div className="book-id">{post.id}</div></td><td ><div className="book-title">{post.title}</div></td><td ><div className="book-author">{post.author}</div></td><td><div className="book-date">21/3/2024</div></td><td ><div className="book-till">30/3/2024</div></td><td><div className="book-byuser">Nongmaithem Venker Singh</div></td></tr>)} */}
       
     </tbody>
         </table>;
};
