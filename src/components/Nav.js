import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../img/Logo.png";

function Nav() {
  const { token } = useContext(AuthContext);

  return (
    <>
      {token && (
        <nav className="nav">
          <div className="nav-header">
            <img src={logo} alt="logo ipul24" className="logoipul24" />
            <h1>IPUL 24 DE DICIEMBRE</h1>
          </div>
          <div className="menu">
            <NavLink
              exact
              to="/dashboard"
              activeClassName="active"
              className="menu-a"
            >
              Dashboard
            </NavLink>
            <NavLink
              exact
              to="/members"
              activeClassName="active"
              className="menu-a"
            >
              Miembros
            </NavLink>
            <NavLink
              exact
              to="/tithe"
              activeClassName="active"
              className="menu-a"
            >
              Diezmos
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
