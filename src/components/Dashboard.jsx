import { useState } from "react";
import { BooksCount } from "./BooksCount";
import { BooksTable } from "./BooksTable";
import { Borrowedbooks } from "./CountBooks/Borrowedbooks";
import { OverDue } from "./CountBooks/OverDue";
import { ReturnBooks } from "./CountBooks/ReturnBooks";
import { TotalBooks } from "./CountBooks/TotalBooks";
import "./Dashboard.css"
import { ReturnBooklist } from "./CountBooks/ReturnBooklist";
import { Overduebooklist } from "./CountBooks/Overduebooklist";


export const Dashboard = ({totalbooks}) => {
 
  return <div className="dashboard">
<TotalBooks totalbooks={totalbooks}/>
<Borrowedbooks/>
<ReturnBooks/>
<OverDue/>
<ReturnBooklist/>
<Overduebooklist/>
  </div>;
};
