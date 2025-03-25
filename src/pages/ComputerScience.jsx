import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ComputerScience = () => {
  return (
    <Container className="mt-5 pt-5 text-white">
      <h1 className="text-center mb-4">💻 Computer Science Topics</h1>
      <Row>
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Algorithms</Card.Title>
              <Card.Text>Sorting, searching, and graph algorithms.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Data Structures</Card.Title>
              <Card.Text>Lists, stacks, trees, and graphs.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-3">
            <Card.Body>
              <Card.Title>Machine Learning</Card.Title>
              <Card.Text>Intro to AI, models, and deep learning.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComputerScience;
