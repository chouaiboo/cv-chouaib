import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Social.css';

const Social = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/chouaib elhaddad' },
    { icon: <FaTwitter />, url: 'https://twitter.com/chouaib elhaddad' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/votreprofil' },
    { icon: <FaGithub />, url: 'https://github.com/votrecompte' },
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a 
          key={index} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;