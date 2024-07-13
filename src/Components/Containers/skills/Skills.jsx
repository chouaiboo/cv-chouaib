/** @format */

import React from "react";
import Particles from "../../Particle";
import { FaUser } from "react-icons/fa";
import "./Skills.css";
import PageHeader from "../../../pageHeaderContent/PageHeader";

const Skills = () => {
  const job = [
    {
      label: "Front-end",
      data: [
        { SkillName: "Html", Pourcentge: "90%" },
        { SkillName: "Css", Pourcentge: "60%" },
        { SkillName: "Javascript", Pourcentge: "55%" },
        { SkillName: "Bootstrap", Pourcentge: "90%" },
        { SkillName: "React", Pourcentge: "40%" },
      ],
    },
    {
      label: "Back-end",
      data: [
        { SkillName: "php", Pourcentge: "50%" },
        { SkillName: "python", Pourcentge: "50%" },
      ],
    },
    {
      label: "Base de données",
      data: [{ SkillName: "mysql", Pourcentge: "55%" }],
    },
  ];

  return (
    <div className="skills-page">
      {/* <Particles /> */}
      <PageHeader title="My Skills" icon={<FaUser />} />
      <div className="skills-container">
        {job.map((category, index) => (
          <div key={index} className="skill-category">
            <h2 className="category-title">{category.label}</h2>
            <div className="skills-list">
              {category.data.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-name">{skill.SkillName}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: skill.Pourcentge }}></div>
                  </div>
                  <span className="skill-percentage">{skill.Pourcentge}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
