import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="landing-page d-flex align-items-center">
      <Container>
        <Row className="text-center">
          <Col>
            <h1 className="display-4 fw-bold text-light">
              🚀 Mathematics & Computer Science Hub
            </h1>
            <p className="lead text-white-50">
              Master mathematical concepts, explore computer science, and use interactive tools to enhance your learning.
            </p>
            <Button href="/math" variant="primary" size="lg" className="me-3">
              Explore Math 📐
            </Button>
            <Button href="/cs" variant="success" size="lg">
              Learn CS 💻
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
