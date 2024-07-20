import React from 'react';
import PageHeader from '../../../pageHeaderContent/PageHeader';
import { FaUser } from 'react-icons/fa';
import './About.css';
import Particles from "../../Particle";
const About = () => {
  const info = [
    {
      label: "Name",
      value: "Chouaib"
    },
    {
      label: "Number",
      value: "+212688037279"
    },
    {
      label: "email",
      value: "chouaibeelhaddad24@gmail.com"
    },
    {
      label: "Profession",
      value: "Front-end developer"
    },
    {
     label:"Adresse",
     value:"Maroc"
    }
  ];
  const learningSteps = "Du HTML à la maîtrise de React, chaque ligne de code est une étape vers l'excellence front-end. Transformez vos idées en interfaces captivantes !";

  
  const description = "Je suis Chouaib Elhaddad, un développeur front-end passionné par la création d'interfaces web esthétiques et fonctionnelles. Avec une solide maîtrise de HTML, CSS, JavaScript et des frameworks comme React, je transforme des concepts en expériences utilisateur exceptionnelles. Mon objectif est de concevoir des sites web intuitifs, réactifs et accessibles qui non seulement attirent lœil mais offrent également une performance optimale. Toujours en quête de perfection, je reste à laffût des dernières tendances et innovations technologiques pour apporter des solutions modernes et efficaces. En tant que développeur, je suis déterminé à fusionner design et fonctionnalité pour offrir des produits de qualité supérieure"

  return (

  <>
  <Particles/>
  
    <div className='about' id='about'>
      <PageHeader title="About Me" icon={<FaUser />} />
      <h2 className="profe">Front-end Developer</h2>
      <p className="description">{description}</p>
      <div className="container-description">
        <ul className="listeitems">
          {info.map((item, i) => (
            <li key={i}>
              <span className='label'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="learning-journey">
        <hr className="journey-line" />
        <p className="journey-description">{learningSteps}</p>
      </div>
    </div>
    </>
  );
};

export default About;
