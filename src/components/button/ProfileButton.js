import React from "react";

function ProfileButton() {
  return (
    <div className="dropdown ">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Jonathan Guaynora</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Perfil
          </a>
          <a href="#" className="dropdown-item">
            Cerrar Sesion
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileButton;
