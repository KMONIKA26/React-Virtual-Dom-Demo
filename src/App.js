import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  const [reactCount, setReactCount] = useState(0);

  const handleReactClick = () => {
    setReactCount(prev => {
      document.title = `React Title ${prev + 1}`;
      return prev + 1;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Virtual DOM Update</h1>
      <button onClick={handleReactClick}>Change Title (React)</button>
      <p>DOM Updates: {reactCount}</p>
    </div>
  );
}

export default App;
// This code is a simple React application that updates the document title
// and displays the number of updates when a button is clicked.
// It uses React's useState hook to manage the count of updates.
// The document title is updated each time the button is clicked, 
// demonstrating how React handles state and effects in a virtual DOM environment.