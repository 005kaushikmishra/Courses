import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <p className="loading-text">Loading...</p>
      <div className="progress"></div>
    </div>
  );
};

export default Spinner;
