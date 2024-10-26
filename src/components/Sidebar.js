// src/components/Sidebar.js
import React from 'react';
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Sidebar = () => (
  <aside className="sidebar">
    <img src="./images/self.jpg" alt="Profile" className="profile-img" />
    <h2>Tanmoy Barua</h2>
    <p>Software Engineer</p>
    <div className="contact-info">
      <p><FaEnvelope /> tanmoybarua43@gmail.com</p>
      <p><FaPhone /> +1 (213) 341-7223</p>
      <p><FaBirthdayCake /> June 24, 1999</p>
      <p><FaMapMarkerAlt /> Los Angeles, California, USA</p>
    </div>
    <div className="social-links">
      <a href="https://x.com/tanmoybarua43" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a> 
      <a href="https://www.linkedin.com/in/tanmoybarua/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>  
      <a href="https://github.com/Tanmoy-Barua" target="_blank" rel="noopener noreferrer"><FaGithub /></a>   
    </div>
  </aside>
);

export default Sidebar;
