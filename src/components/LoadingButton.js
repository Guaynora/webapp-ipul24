import React from "react";

function LoadingButton({ type }) {
  if (type === "login") {
    return (
      <button className="button is-loading is-rounded is-success">
        Loading
      </button>
    );
  } else {
    return (
      <button className="button is-loading is-rounded is-info">Loading</button>
    );
  }
}

export default LoadingButton;
