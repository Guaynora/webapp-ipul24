import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../img/Logo.png";

function Nav() {
  const { token } = useContext(AuthContext);

  return (
    <>
      {token && (
        <nav className="nav">
          <div className="nav-header">
            <img src={logo} alt="logo ipul24" className="logoipul24" />
            <h1 className="title is-6 has-text-white	">IPUL 24 DE DICIEMBRE</h1>
          </div>
          <div className="menu">
            <NavLink exact to="/" activeClassName="active" className="menu-a">
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
            <NavLink
              exact
              to="/movements"
              activeClassName="active"
              className="menu-a"
            >
              Movimientos
            </NavLink>
            <NavLink
              exact
              to="/offering"
              activeClassName="active"
              className="menu-a"
            >
             Ofrendas 
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
