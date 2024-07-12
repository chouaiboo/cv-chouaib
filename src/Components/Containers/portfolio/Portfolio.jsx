import React from 'react';
import PageHeader from '../../../pageHeaderContent/PageHeader';
import { FaUser, FaGraduationCap } from "react-icons/fa";
import Particles from '../../Particle';
import './Portfolio.css';

const Portfolio = () => {
  const experiences = [
    {
      title: 'Front-End Developer',
      company: 'ABC Corp',
      duration: 'Jan 2023 - Present',
      description: 'Developed and maintained the front end of various web applications using React and Redux.'
    },
    {
      title: 'Junior Developer',
      company: 'XYZ Ltd',
      duration: 'Jul 2022 - Dec 2022',
      description: 'Assisted in the development of e-commerce sites and worked closely with the UX/UI team to implement responsive designs.'
    }
  ];

  const education = [
    {
      institution: 'Université Hassan 2 Aichock SMM',
      degree: 'Bachelor in Computer Science',
      duration: 'Sep 2018 - Jun 2022'
    },
    {
      institution: 'ISTA Lalla Aicha',
      degree: 'Diploma in Digital Development',
      duration: 'Sep 2022 - Dec 2022'
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <PageHeader title="Experience" icon={<FaUser />} />
        <div className="section">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <PageHeader title="Education" icon={<FaGraduationCap />} />
        <div className="section">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
      <Particles />
    </div>
  );
}

export default Portfolio;