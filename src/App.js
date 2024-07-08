import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LearningResources from './pages/LearningResources';
import PracticeTests from './pages/PracticeTests';
import Levels from './components/Levels';
import './App.css'; // Correct path to App.css

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/resources/articles-books" element={<LearningResources />} />
          <Route path="/resources/videos" element={<LearningResources />} />
          <Route path="/resources/practice-tests" element={<PracticeTests />} />
          <Route path="/levels" element={<Levels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
