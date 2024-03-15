import React, { useState } from "react";
import "./totalbooks.css"

export const TotalBooks = () => {
    const [total,setTotal]=useState(0);
  return <div className="total">
    <p className="total-books">Total no.of books</p>
    {total}
  </div>;
};
