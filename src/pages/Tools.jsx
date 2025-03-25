import React from "react";
import Calculator from "../components/Calculator";
import { Container } from "react-bootstrap";

const Tools = () => {
  return (
    <Container className="mt-5 pt-5 text-white">
      <h1 className="text-center mb-4">🛠 Interactive Tools</h1>
      <Calculator />
    </Container>
  );
};

export default Tools;
