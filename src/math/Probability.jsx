import React from "react";
import { Card } from "react-bootstrap";

const Probability = () => {
  return (
    <Card className="mb-4 p-4">
      <h2>📌 Probability</h2>
      <p>Probability is the measure of the likelihood of an event occurring.</p>

      <h4>Basic Probability Formula:</h4>
      <p>
        <span>P(E) = Number of favorable outcomes / Total number of outcomes</span>
      </p>

      <h4>Types of Events:</h4>
      <ul>
        <li>Independent Events: \( P(A \cap B) = P(A)P(B) \)</li>
        <li>Mutually Exclusive Events: \( P(A \cup B) = P(A) + P(B) \)</li>
      </ul>

      <h4>Bayes’ Theorem:</h4>
      <p>
        <span>P(A|B) = [P(B|A) * P(A)] / P(B)</span>
      </p>
    </Card>
  );
};

export default Probability;
