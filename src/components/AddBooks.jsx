import { useState } from "react";
import "./AddBooks.css"

export const AddBooks = () => {
  const [book,setBook]=useState({bookname:"",bookID:"",authorname:"",category:""});
  const [books,setBooks]=useState([]);
  function handleAdd(e){
    e.preventDefault();
   
    setBooks([...books,book.bookname,book.bookID,book.authorname,book.category])
  }
  return <div className="addbooks">
          <div className="form-box">
            <p>Add Books</p>
            {console.log(book)}
            {console.log(books)}
            <form>
              <div>
                <label>Book name:</label>
                <input onChange={(e)=>setBook({...book,bookname:e.target.value})}type="text" placeholder="Enter the book name"/>
              </div>
              <div>
                <label>Book ID:</label>
                <input onChange={(e)=>setBook({...book,bookID:e.target.value})} type="text" placeholder="Enter the book ID"/>
              </div>
              <div>
                <label>Author name:</label>
                <input onChange={(e)=>setBook({...book,authorname:e.target.value})} type="text" placeholder="Enter the author name"/>
              </div>
              <div>
                <label>Category:</label>
                <input onChange={(e)=>setBook({...book,category:e.target.value})} list="categories"id="category" placeholder="Categories"/>
                <datalist id="categories">
                <option value="Computer Science and Engineering" className="value"></option>
                <option value="Electrical Engineering" className="value"></option>
                <option value="Electronics and Communication Engineering" className="value"></option>
                <option value="Civil Engineering" className="value"></option>
                <option value="Mechanical Engineering" className="value"></option>
                </datalist>
              </div>
              <button onClick={handleAdd} className="add">Add</button>
            </form>
          </div>
         </div>;
};
