import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/Logo.png";

function Nav() {
  return (
    <nav className="nav">
      <div>
        <img src={logo} alt="logo ipul24" className="logoipul24" />
        <h1>IPUL 24 DE DICIEMBRE</h1>
      </div>
      <div className="menu">
        <NavLink exact to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink exact to="/members" activeClassName="active">
          Miembros
        </NavLink>
        <NavLink exact to="/tithe" activeClassName="active">
          Diezmos
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
