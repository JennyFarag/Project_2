import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/homeimage.png`} alt="Hero" />
        <div className="hero-text">
          <h1>Embark on your language journey and elevate your linguistic skills!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </section>

      <section className="features-section">
        <Container>
          <Row>
            <Col md={3}>
              <div>
                <i className="fas fa-chalkboard-teacher"></i>
                <h4>Online Tutoring</h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <i className="fas fa-book"></i>
                <h4>40 Courses</h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <i className="fas fa-unlock-alt"></i>
                <h4>Lifetime Access</h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <i className="fas fa-brain"></i>
                <h4>Activate Learning</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="about-title">About us</h2>
              <h3>Know About Best Online Learning Platform With Verbalize</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link to="/about" className="btn btn-outline-dark more-about-button">More about us</Link>
            </Col>
            <Col md={6}>
              <img src={`${process.env.PUBLIC_URL}/image2.png`} alt="About us" className="about-image" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="goal-section">
        <Container>
          <Row>
            <Col md={3} className="goal-item">
              <h3>Our Goal</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Col>
            <Col md={1} className="chevron">
              <i className="fas fa-chevron-right"></i>
            </Col>
            <Col md={3} className="goal-item">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Col>
            <Col md={1} className="chevron">
              <i className="fas fa-chevron-right"></i>
            </Col>
            <Col md={3} className="goal-item">
              <h3>Our Values</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
