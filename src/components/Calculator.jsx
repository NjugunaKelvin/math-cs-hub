import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      setResult(eval(expression).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <Container className="mt-5 pt-5 text-white">
      <h2 className="text-center">🧮 Simple Calculator</h2>
      <Form.Group>
        <Form.Control
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression (e.g., 2+2)"
          className="text-center mt-3"
        />
      </Form.Group>
      <Button variant="primary" onClick={calculate} className="mt-3">
        Calculate
      </Button>
      {result && <h4 className="mt-3">Result: {result}</h4>}
    </Container>
  );
};

export default Calculator;
