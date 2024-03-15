import React, { useState } from "react";
import "./ReturnBooks.css"
export const ReturnBooks = () => {
    const [returnBooks,setReturn] =useState(0);
  return <div className="return">
    <p>Return Books</p>
    {returnBooks}
  </div>;
};
