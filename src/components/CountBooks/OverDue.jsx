import React, { useState } from "react";
import "./OverDue.css"

export const OverDue = () => {
    const [overduebooks,setOverdue]=useState(0);
  return <div className="overdue">
    <p>Overdue Books</p>
    {overduebooks}
  </div>;
};
