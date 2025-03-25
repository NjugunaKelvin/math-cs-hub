import React from "react";
import { Card } from "react-bootstrap";

const Trigonometry = () => {
  return (
    <Card className="mb-4 p-4">
      <h2>📌 Trigonometry</h2>
      <p>Trigonometry deals with the relationship between angles and sides of triangles.</p>

      <h4>Basic Trigonometric Functions:</h4>
      <ul>
        <li>{`sin(θ) = opposite / hypotenuse`}</li>
        <li>{`cos(θ) = adjacent / hypotenuse`}</li>
        <li>{`tan(θ) = opposite / adjacent`}</li>
      </ul>

      <h4>Important Identities:</h4>
      <p>\( \sin^2\theta + \cos^2\theta = 1 \)</p>
      <p>\( 1 + \tan^2\theta = \sec^2\theta \)</p>
    </Card>
  );
};

export default Trigonometry;
