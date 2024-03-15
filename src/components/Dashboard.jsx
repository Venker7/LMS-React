import { BooksCount } from "./BooksCount";
import { BooksTable } from "./BooksTable";
import { Borrowedbooks } from "./CountBooks/Borrowedbooks";
import { OverDue } from "./CountBooks/OverDue";
import { ReturnBooks } from "./CountBooks/ReturnBooks";
import { TotalBooks } from "./CountBooks/TotalBooks";
import "./Dashboard.css"


export const Dashboard = () => {
  return <div className="dashboard">
<TotalBooks/>
<Borrowedbooks/>
<ReturnBooks/>
<OverDue/>
  </div>;
};
