import React from "react";
import { NavLink } from "react-router-dom";
export const CheckbooksNavbar = () => {
  return <div className="issue-department">
     <NavLink to='/home/checkbooks' className="issue-links">Computer Science</NavLink>
    <NavLink to='/home/checkbooks/electrical' className="issue-links">Electrical</NavLink>
    <NavLink to='/home/checkbooks/electronics' className="issue-links">Electronics</NavLink>
    <NavLink to='/home/checkbooks/civil' className="issue-links">Civil</NavLink>
    <NavLink to='/home/checkbooks/mechanical' className="issue-links">Mechanical</NavLink>    
    <NavLink to='/home/checkbooks/basicscience' className="issue-links">Basic Science</NavLink>
    <NavLink to='/home/checkbooks/humanscience' className="issue-links">Humanities and Social Science</NavLink>
    <NavLink to='/home/checkbooks/management' className="issue-links">Management</NavLink>

  </div>;
};
