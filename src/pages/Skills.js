import React from 'react';
import SkillItem from '../components/SkillItem';
import bootStrapImg from "../assets/skills/bootstrap.png";
import cppImg from "../assets/skills/cpp.png";
import cssImg from "../assets/skills/css.png";
import drupalImg from "../assets/skills/drupal.png";
import expressImg from "../assets/skills/express.png";
import gitImg from "../assets/skills/git.png";
import htmlImg from "../assets/skills/html.png";
import javaImg from "../assets/skills/java.png";
import javaScriptImg from "../assets/skills/javascript.png";
import jqueryImg from "../assets/skills/jquery.png";
import mongodbImg from "../assets/skills/mongodb.png";
import mysqlImg from "../assets/skills/mysql.png";
import nodejsImg from "../assets/skills/nodejs.png";
import phpImg from "../assets/skills/php.png";
import pythonImg from "../assets/skills/python.png";
import reactImg from "../assets/skills/react.png";
import tailwindImg from "../assets/skills/tailwind.png";

const skillsData = [
  { iconSrc: bootStrapImg, label: "Bootstrap" },
  { iconSrc: cppImg, label: "C++" },
  { iconSrc: cssImg, label: "CSS" },
  { iconSrc: drupalImg, label: "Drupal" },
  { iconSrc: expressImg, label: "Express" },
  { iconSrc: gitImg, label: "Git" },
  { iconSrc: htmlImg, label: "HTML" },
  { iconSrc: javaImg, label: "Java" },
  { iconSrc: javaScriptImg, label: "JavaScript" },
  { iconSrc: jqueryImg, label: "jQuery" },
  { iconSrc: mongodbImg, label: "MongoDB" },
  { iconSrc: mysqlImg, label: "MySQL" },
  { iconSrc: nodejsImg, label: "Node.js" },
  { iconSrc: phpImg, label: "PHP" },
  { iconSrc: pythonImg, label: "Python" },
  { iconSrc: reactImg, label: "React" },
  { iconSrc: tailwindImg, label: "Tailwind CSS" },
];

export default function Skills() {
  return (
    <section className="p-5 mb-10 max-sm:p-2 max-sm:mx-5 z-0">
      <h1 className="text-[#00040f] font-bold text-5xl text-center max-sm:text-4xl">SKILLS</h1>
      {/* Conditional rendering for mobile devices */}
      {window.innerWidth <= 640 ? (
        <div className="grid p-5 gap-2 mt-10">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} iconSrc={skill.iconSrc} label={skill.label} />
          ))}
        </div>
      ) : (
        <div className="grid justify-center p-5 grid-cols-2 gap-2 mt-10 max-sm:grid-cols-2" data-aos="slide-up">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} iconSrc={skill.iconSrc} label={skill.label} />
          ))}
        </div>
      )}
    </section>
  )
}
