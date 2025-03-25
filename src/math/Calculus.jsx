import React from "react";
import { Card } from "react-bootstrap";

const Calculus = () => {
  return (
    <Card className="mb-4 p-4">
      <h2>📌 Calculus</h2>
      <p>Calculus is the study of rates of change and accumulation.</p>

      <h4>Basic Concepts:</h4>
      <ul>
        <li>Limits: <span>lim<sub>x → a</sub> f(x)</span></li>
        <li>Derivatives: <span>f'(x) = lim<sub>h → 0</sub> [(f(x+h) - f(x)) / h]</span></li>
        <li>Integrals: \( \int f(x) dx \) (area under the curve)</li>
      </ul>

      <h4>Fundamental Theorem of Calculus:</h4>
      <p>
        \( \frac{d}{dx} \int f(x)dx = f(x) \)
      </p>
    </Card>
  );
};

export default Calculus;
