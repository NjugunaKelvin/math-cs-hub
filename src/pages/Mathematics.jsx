import React, { Suspense, lazy } from "react";
import { Container, Row, Col, Dropdown, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Lazy load sections
const Algebra = lazy(() => import("../math/Algebra"));
const Calculus = lazy(() => import("../math/Calculus"));
const Geometry = lazy(() => import("../math/Geometry"));
const Trigonometry = lazy(() => import("../math/Trigonometry"));
const Probability = lazy(() => import("../math/Probability"));

const Mathematics = () => {
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center mb-4">Mathematics Hub 📚</h1>
      <p className="text-center">Explore fundamental and advanced mathematics concepts.</p>
      
      {/* Dropdown Navigation */}
      <Dropdown className="text-center mb-3">
        <Dropdown.Toggle variant="primary" id="dropdown-math">
          Select a Topic
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#algebra">Algebra</Dropdown.Item>
          <Dropdown.Item href="#calculus">Calculus</Dropdown.Item>
          <Dropdown.Item href="#geometry">Geometry</Dropdown.Item>
          <Dropdown.Item href="#trigonometry">Trigonometry</Dropdown.Item>
          <Dropdown.Item href="#probability">Probability & Statistics</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Math Sections with Lazy Loading */}
      <Suspense fallback={<Spinner animation="border" role="status" className="d-block mx-auto" />}>
        <Row>
          <Col md={12} id="algebra">
            <Algebra />
          </Col>
        </Row>
        <Row>
          <Col md={12} id="calculus">
            <Calculus />
          </Col>
        </Row>
        <Row>
          <Col md={12} id="geometry">
            <Geometry />
          </Col>
        </Row>
        <Row>
          <Col md={12} id="trigonometry">
            <Trigonometry />
          </Col>
        </Row>
        <Row>
          <Col md={12} id="probability">
            <Probability />
          </Col>
        </Row>
      </Suspense>
      
      {/* External Useful Links */}
      <div className="mt-5 text-center">
        <h3>📌 Useful Links</h3>
        <ul className="list-unstyled">
          <li><Link to="https://www.khanacademy.org/math" target="_blank">Khan Academy Mathematics</Link></li>
          <li><Link to="https://www.wolframalpha.com" target="_blank">Wolfram Alpha (Math Solver)</Link></li>
          <li><Link to="https://mathworld.wolfram.com/" target="_blank">MathWorld</Link></li>
          <li><Link to="https://www.geogebra.org/" target="_blank">GeoGebra (Interactive Math)</Link></li>
        </ul>
      </div>
    </Container>
  );
};

export default Mathematics;