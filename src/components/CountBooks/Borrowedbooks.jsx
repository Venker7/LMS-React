import React, { useState } from "react";
import "./Borrowedbooks.css"

export const Borrowedbooks = () => {
  const [borrow,setBorrow]=useState(0);
  return <div className="borrow">
    <p>Issued Books</p>
    {borrow}
  </div>;
};
