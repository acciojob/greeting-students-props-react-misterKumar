import React from "react";
import "../styles/App.css";

const Welcome = ({ name }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-message">Hey {name}!</h1>
      <h2 className="welcome-subtitle">Welcome to school.</h2>
    </div>
  );
};

export default Welcome;