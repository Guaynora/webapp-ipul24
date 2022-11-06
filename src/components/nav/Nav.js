import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../img/Logo.png";

function Nav() {
  const [showMembresi, setShowMembresi] = useState(false);
  const [showFinance, setShowFinance] = useState(false);
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
            <div className="custom-dropdown">
              <div
                className={`button-dropdown ${
                  showMembresi && "dropdown-isactive"
                }`}
                onClick={() => setShowMembresi(!showMembresi)}
              >
                <span>Membresía</span>
                <span className="icon">
                  <i
                    className="fas fa-lg fa-angle-down"
                    aria-hidden="true"
                    style={{
                      transition: "transform .5s",
                      transform: `rotate(${showMembresi ? 180 : 0}deg)`,
                    }}
                  ></i>
                </span>
              </div>
              <div
                className={
                  showMembresi ? "custom-dropdown-content" : "content-hidden"
                }
              >
                <NavLink
                  exact
                  to="/members"
                  activeClassName="active"
                  className="menu-a"
                >
                  Miembros
                </NavLink>
              </div>
            </div>
            <div className="custom-dropdown">
              <div
                className={`button-dropdown ${
                  showFinance && "dropdown-isactive"
                }`}
                onClick={() => setShowFinance(!showFinance)}
              >
                <span>Finanzas</span>
                <span className="icon">
                  <i
                    className="fas fa-lg fa-angle-down"
                    aria-hidden="true"
                    style={{
                      transition: "transform .5s",
                      transform: `rotate(${showFinance ? 180 : 0}deg)`,
                    }}
                  ></i>
                </span>
              </div>
              <div
                className={
                  showFinance ? "custom-dropdown-content" : "content-hidden"
                }
              >
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
                  to="/concepts"
                  activeClassName="active"
                  className="menu-a"
                >
                  Conceptos
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
