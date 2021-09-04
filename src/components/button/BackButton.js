import React from "react";
import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();

  const handlePrev = (e) => {
    history.goBack();
  };

  return (
    <button className="button" onClick={handlePrev}>
      <span>
        <i className="fas fa-chevron-left"></i>
      </span>
    </button>
  );
}

export default BackButton;
