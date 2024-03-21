import React from "react";
import "./IssuebooksNavbar.css"
import { NavLink } from "react-router-dom";
export const IssuebooksNavbar = () => {
  return <div className="issue-department">
    <NavLink to='/home/issuedbooks/computer' className="issue-links">Computer Science</NavLink>
    <NavLink to='electrical' className="issue-links  ">Electrical</NavLink>
    <NavLink to='electronics' className="issue-links  ">Electronics</NavLink>
    <NavLink to='civil' className="issue-links  ">Civil</NavLink>
    <NavLink to='mechanical' className="issue-links  ">Mechanical</NavLink>    
    <NavLink to='basicscience' className="issue-links  ">Basic Science</NavLink>
    <NavLink to='humanscience' className="issue-links  ">Humanities and Social Science</NavLink>
    <NavLink to='management' className="issue-links  ">Management</NavLink>

  </div>;
};
 