// src/components/Projects.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <div className="project-cards">
      <div className="project-card">
        <h3>sql-sanitizer</h3>
        <p>Here this express module detects SQL injection attacks and rejects the requests.</p>
        <a href="https://github.com/Tanmoy-Barua/sql-sanitizer" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h3>expense-tracker-p3</h3>
        <p>The Expense Tracker Application is a full-stack web application designed to help users track and manage their personal finances effectively. Built using React, Redux, and MongoDB for the backend, this application provides a seamless and user-friendly experience for managing expenses, setting budgets, and visualizing spending habits.</p>
        <a href="https://github.com/tanmoybarua43/expense-tracker-p3" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h3>jest-test</h3>
        <p>Jest is a JavaScript testing framework primarily used to test JavaScript and React applications. Created and maintained by Facebook, Jest is popular for its simplicity and powerful features, allowing developers to write tests quickly and maintain them efficiently. It’s well-suited for unit tests, integration tests, and even snapshot testing.</p>
        <a href="https://github.com/tanmoybarua43/jest-test" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
