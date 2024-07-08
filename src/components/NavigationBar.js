import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>LanguagePro Academy</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Courses" id="courses-dropdown">
              <LinkContainer to="/courses">
                <NavDropdown.Item>Courses</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/course-details">
                <NavDropdown.Item>Course Details</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Learning Resources" id="learning-resources-dropdown">
              <LinkContainer to="/resources/articles-books">
                <NavDropdown.Item>Articles/Books</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/resources/videos">
                <NavDropdown.Item>Videos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/resources/practice-tests">
                <NavDropdown.Item>Practice Tests</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Pages" id="pages-dropdown">
              <LinkContainer to="/pages/about-us">
                <NavDropdown.Item>About Us</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/pages/faq">
                <NavDropdown.Item>FAQ</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/pages/contact">
                <NavDropdown.Item>Contact</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Blog" id="blog-dropdown">
              <LinkContainer to="/blog/latest">
                <NavDropdown.Item>Latest Posts</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog/tutorials">
                <NavDropdown.Item>Tutorials</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog/news">
                <NavDropdown.Item>News</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="d-flex align-items-center">
            <span className="phone-number me-3">
              <i className="fas fa-phone-alt"></i> 613-989-0007
            </span>
            <LinkContainer to="/register">
              <Button variant="primary" className="register-button">Register Now</Button>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
