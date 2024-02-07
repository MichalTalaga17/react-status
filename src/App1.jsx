import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';

const App1 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="main_container">
      <button onClick={toggleVisibility}>Toggle App</button>
      {isVisible && <App />}
    </div>
  );
};

export default App1;