import React, { useState } from "react";
import "./totalbooks.css"

export const TotalBooks = ({totalbooks}) => {
  return <div className="total">
    <p className="total-books">Total no.of books</p>
    {totalbooks}
  </div>;
};
