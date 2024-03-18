import React from "react";
import "./IssuebooksNavbar.css"
import { NavLink } from "react-router-dom";
export const IssuebooksNavbar = () => {
  return <div className="issue-department">
    <NavLink to='/home/issuedbooks' className="issue-links">Computer Science</NavLink>
    <NavLink to='/home/issuedbooks/electrical' className="issue-links">Electrical</NavLink>
    <NavLink to='/home/issuedbooks/electronics' className="issue-links">Electronics</NavLink>
    <NavLink to='/home/issuedbooks/civil' className="issue-links">Civil</NavLink>
    <NavLink to='/home/issuedbooks/mechanical' className="issue-links">Mechanical</NavLink>    
    <NavLink to='/home/issuedbooks/basicscience' className="issue-links">Basic Science</NavLink>
    <NavLink to='/home/issuedbooks/humanscience' className="issue-links">Humanity Science</NavLink>

  </div>;
};
