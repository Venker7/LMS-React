import { CseIssuebooks } from "./Issuebooks/CseIssuebooks";
import { IssuebooksNavbar } from "./Issuebooks/IssuebooksNavbar";
import { Outlet } from "react-router-dom";
import { Routes ,Route} from "react-router-dom";
import "./IssuedBooks.css"
import { HSissuedbooks } from "./Issuebooks/HSissuedbooks";
export const IssuedBooks = () => {
  return <div className="issuedbooks">
    <IssuebooksNavbar/>
    <Outlet/>  
  </div>;
};
