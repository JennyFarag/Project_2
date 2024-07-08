import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FacetedSearch from '../components/FacetedSearch';
import CustomCalendar from '../components/Calendar'; // Ensure the correct path
import '../styles/Courses.css'; // Ensure the path is correct

const resources = [
  { id: 1, title: 'Beginner Spanish Video', type: 'video', level: 'beginner', language: 'spanish' },
  { id: 2, title: 'Intermediate Spanish Document', type: 'document', level: 'intermediate', language: 'spanish' },
  { id: 3, title: 'Advanced French Video', type: 'video', level: 'advanced', language: 'french' },
  { id: 4, title: 'Beginner Italian Document', type: 'document', level: 'beginner', language: 'italian' },
  // Add more resources as needed
];

const Courses = () => {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({ language: '', level: '', material: '' });

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    const filteredResults = resources.filter(resource =>
      (!newFilters.language || resource.language === newFilters.language) &&
      (!newFilters.level || resource.level === newFilters.level) &&
      (!newFilters.material || resource.type === newFilters.material)
    );
    setResults(filteredResults);
  };

  return (
    <Container className="courses-page">
      <Row>
        <Col md={8}>
          <div className="courses-hero">
            <h1>Our Courses</h1>
            <p>Home &gt; Courses</p>
          </div>
          <FacetedSearch onSearch={handleSearch} />
          <div className="search-results">
            <h2>Search Results</h2>
            {filters.level && filters.material && (
              <p>Level: {filters.level.charAt(0).toUpperCase() + filters.level.slice(1)}, Material: {filters.material.charAt(0).toUpperCase() + filters.material.slice(1)}</p>
            )}
            <ul>
              {results.map(result => (
                <li key={result.id}>{result.title} ({result.type})</li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <CustomCalendar />
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
