import React from 'react';

const Resume = () => {
  return (
    <div className='header-wrapper'>
    <div className="resume">
      <h1 className="resume-title">Resume</h1>
      <div className="resume-section">
        <h2>Education</h2>
        <p className="resume-subtitle">UNC-Chapel Hill Coding BootCamp</p>
        <p>Full-Stack Coding BootCamp July 2023</p>
      </div>
      <div className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Git</li>
          <li>MongoDb</li>
          <li>REST API</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Resume;
