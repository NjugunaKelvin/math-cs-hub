import React from "react";
import { Card } from "react-bootstrap";

const Algebra = () => {
  return (
    <Card className="mb-4 p-4">
      <h2>📌 Algebra</h2>
      <p>Algebra is the study of mathematical symbols and rules for manipulating them.</p>

      <h4>Basic Concepts:</h4>
      <ul>
        <li>Variables & Expressions: \( x + 3, 2y - 7 \)</li>
        <li>Equations: \( 2x + 5 = 11 \)</li>
        <li>Inequalities: \( x - 4 \geq 2 \)</li>
      </ul>

      <h4>Quadratic Equation:</h4>
      <p>The standard form: \( ax^2 + bx + c = 0 \)</p>
      <p>Solution using the quadratic formula:</p>
      <p>
        <span dangerouslySetInnerHTML={{ __html: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" }} />
      </p>
    </Card>
  );
};

export default Algebra;
