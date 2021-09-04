import React from "react";

function Search() {
  return (
    <p className="control has-icons-left">
      <input className="input" type="text" placeholder="Buscar" />
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  );
}

export default Search;
