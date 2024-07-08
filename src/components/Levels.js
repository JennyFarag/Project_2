// src/components/Levels.js

import React from 'react';
import '../styles/Levels.css';

const Levels = () => {
  return (
    <div className="levels">
      <h1>Select Your Level</h1>
      <div className="level-boxes">
        <div className="level-box">Level 1</div>
        <div className="level-box">Level 2</div>
        <div className="level-box">Level 3</div>
        <div className="level-box">Level 4</div>
        <div className="level-box">Level 5</div>
      </div>
    </div>
  );
};

export default Levels;
