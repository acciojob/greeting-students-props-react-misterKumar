import React, { useState } from "react";
import Welcome from "./Welcome";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setName(name.trim());
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        {/* <button type="submit">Submit</button> */}
      </form>
      {name && <Welcome name={name} />}
    </div>
  );
};

export default App;