/** @format */

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFileAlt,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import icon from "../Assiete/image/logo.jpeg";

const data = [
  {
    label: "Home",
    to: "./",
    icon: <FaHome />,
  },
  {
    label: "About",
    to: "./about",
    icon: <FaUser />,
  },
  {
    label: "Skills",
    to: "./skills",
    icon: <FaCode />,
  },
  
  {
    label: "Portfolio",
    to: "./portfolio",
    icon: <FaFolderOpen />,
  },
  {
    label: "Contact",
    to: "./contact",
    icon: <FaEnvelope />,
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to={"./"} className="logo">
          {/* Remplacez le texte par votre logo */}
          <img src={icon} alt="Logo" className="logo-img" />
        </Link>
        <ul className="navbar-menu">
          {data.map((item, index) => (
            <li key={index} className="navbar-item">
              <Link to={item.to} className="navbar-link">
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
