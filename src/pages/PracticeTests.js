// src/pages/PracticeTests.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PracticeTests.css';

const PracticeTests = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/levels');
  };

  return (
    <div className="practice-tests">
      <h1>Practice Tests</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <select>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
        <option value="Italian">Italian</option>
      </select>
      <button onClick={handleStart}>Let's Start</button>
    </div>
  );
};

export default PracticeTests;
