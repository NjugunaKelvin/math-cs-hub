import React from "react";
import { Card } from "react-bootstrap";

const Geometry = () => {
  return (
    <Card className="mb-4 p-4">
      <h2>📌 Geometry</h2>
      <p>Geometry is the branch of mathematics that studies shapes, sizes, and properties of space.</p>

      <h4>Basic Shapes & Formulas:</h4>
      <ul>
        <li>Circle: \( A = \pi r^2 \), \( C = 2\pi r \)</li>
        <li>Triangle: \( A = \frac{1}{2}bh \)</li>
        <li>Rectangle: \( A = lw \)</li>
      </ul>

      <h4>Pythagorean Theorem:</h4>
      <p>\( a^2 + b^2 = c^2 \) (for right-angled triangles)</p>
    </Card>
  );
};

export default Geometry;
