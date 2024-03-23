import React, { useEffect, useState } from "react";
import "./CseIssuebooks.css";
import axios from "axios";

export const CseIssuebooks = () => {
  const [posts, setPosts] = useState([]);
  const [buttonTexts, setButtonTexts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await axios.get(
            "https://freetestapi.com/api/v1/books"
          );
          console.log(response);
          setPosts(response.data);
          // Initialize buttonTexts array with 'Return' for each post
          setButtonTexts(response.data.map(() => 'Return'));
        } catch (error) {
          console.log(error);
        }
      }, 1000); // Delay of 2 seconds
    };

    fetchData();
  }, []);

  const handleClick = (index) => {
    console.log(index)
    // Create a copy of buttonTexts array
    const newButtonTexts = [...buttonTexts];
    // Update the text at the specified index
    newButtonTexts[index] = 'Returned';
    // Update the state with the new array
   setButtonTexts(newButtonTexts)


    setTimeout(()=>{
      const newposts = [...posts];
      newposts.splice(index,1);
      setPosts(newposts);
      const newButtonTexts = [...buttonTexts];
      setButtonTexts(newButtonTexts);

    },2000);
  };

  return (
    <table className="listbooks">
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
            <div className="byuser">Borrower/Registration No.</div>
          </th>
          <th>
            <div className="action">Action</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id} className="books-row">
            <td>
              <div className="book-id">{post.id}</div>
            </td>
            <td>
              <div className="book-title">{post.title}</div>
            </td>
            <td>
              <div className="book-author">{post.author}</div>
            </td>
            <td>
              <div className="book-date">21/3/2024</div>
            </td>
            <td>
              <div className="book-till">30/3/2024</div>
            </td>
            <td>
              <div className="book-byuser">Nongmaithem Venker Singh</div>
            </td>
            <td>
              <button className="return-button" onClick={() => handleClick(index)} style={{ backgroundColor: buttonTexts[index] == 'Returned' ? 'green' : 'red'}}
              onMouseEnter={(e)=>e.target.style.backgroundColor='black'}
              onMouseLeave={(e)=>e.target.style.backgroundColor=buttonTexts[index] == 'Returned' ? 'green' : 'red'}>
                {buttonTexts[index]}
              </button>
            </td>
            <td>
              <button className="renew-button">Renew</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
