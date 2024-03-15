import {NavLink} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import './SideNav.css'

export const SideNav = () => {
  return (<div className="side-nav">
    <h2>L.M.S</h2>
    <nav>
    <div id="nav">
    <NavLink className="link" to='/home/dashboard'>Dashboard</NavLink>
    </div>
    <div id="nav">
    <NavLink className="link" to='/home/addbooks'>Add Books</NavLink>
    </div>
    <div id="nav">
    <NavLink  className="link" to='/home/checkbooks'>Check Books</NavLink>
    </div>
    <div id="nav">
    <NavLink className="link" to='/home/issuedbooks'>Issued Books</NavLink>
    </div>


    </nav>
  </div>);
};
