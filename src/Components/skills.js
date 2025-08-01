import React from "react";
import { motion } from "framer-motion";
// skillsData.js
import languages from "../assets/languages.jpg";
import frontendImg from "../assets/frontend.jpg";
import backendImg from "../assets/backend.jpg";
import dbImg from "../assets/database.jpg";
import devopsImg from "../assets/devops.jpg";
import toolsImg from "../assets/tools.jpg";

const skillsData = [
  {
    title: "Programming Languages",
    img: languages,
    subcategories: [
      { name: "Core", skills: ["C++", "Python", "Java"] },
      { name: "Web", skills: ["JavaScript"] },
      { name: "Scripting", skills: ["Python"] },
    ],
  },
  {
    title: "Frontend Development",
    img: frontendImg,
    subcategories: [
      { name: "Core", skills: ["HTML5", "CSS3", "JavaScript"] },
      { name: "Styling Frameworks", skills: ["Tailwind CSS", "Bootstrap"] },
      { name: "Frameworks/Libraries", skills: ["React.js"] },
    ],
  },
  {
    title: "Backend Development",
    img: backendImg,
    subcategories: [
      { name: "Frameworks", skills: ["Node.js", "Express.js"] },
      { name: "APIs", skills: ["REST"] },
      { name: "Auth", skills: ["JWT", "OAuth"] },
    ],
  },
  {
    title: "Databases",
    img: dbImg,
    subcategories: [
      { name: "Database Systems", skills: ["MySQL", "MongoDB"] },
    ],
  },
  {
    title: "DevOps & Version Control",
    img: devopsImg,
    subcategories: [
      { name: "Tools", skills: ["Git", "GitHub"] },
    ],
  },
  {
    title: "Other Tools & Concepts",
    img: toolsImg,
    subcategories: [
      { name: "Concepts", skills: ["REST APIs", "Responsive Design", "OOP", "Problem-Solving"] },
    ],
  },
];

export default function Skills() {
  return (
    <div className="text-white px-6 py-10" id="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {category.title}
              </h3>
              {category.subcategories.map((sub, subIdx) => (
                <div key={subIdx} className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">{sub.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {sub.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200 transition cursor-default font-serif"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
