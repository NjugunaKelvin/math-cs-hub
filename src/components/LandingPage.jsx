import React from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaCode } from "react-icons/fa";
import "./LandingPage.css"; // Import styles

const LandingPage = () => {
  return (
    <div className="landing-container">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">
          Math & Computer Science Hub 🚀
        </h1>
        <p className="subtitle">
          Explore interactive concepts, solve problems, and improve your skills.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="explore-btn"
        >
          Get Started
        </motion.button>
      </motion.div>

      <div className="features">
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCalculator size={50} className="icon math-icon" />
          <h3>Mathematics</h3>
          <p>Learn formulas, graphs, and problem-solving.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCode size={50} className="icon cs-icon" />
          <h3>Computer Science</h3>
          <p>Master algorithms, programming, and AI.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
