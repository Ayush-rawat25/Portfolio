import React from "react";
import { Link } from 'react-scroll';
import pp from "../assets/pp.jpeg.jpg";
import back from "../assets/back.png";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="Home">
        <div className="socials">
          <a
            href="https://github.com/Ayush-rawat25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ayush-rawat-5481802a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/@_Ayush_Rawat_25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/ayush_rawat254/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="container">
          <div className="profile-block">
            <img src={pp} />
            <p className="text-white text-6xl font-mono font-bold ml-4">
              Full-Stack Software Developer
            </p>
          </div>
          <div className="block">
            <p className="mb-2">
              👋 Hi, I’m <span className="text-blue-400">Ayush Rawat</span> .
            </p>
            <Typewriter
              options={{
                strings: [
                  "Frontend Engineer crafting stunning UIs with React & Tailwind.",
                  "Full-stack Developer building scalable, high-performance web apps.",
                  "Tech enthusiast blending design and code for unique experiences.",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 10,
              }}
            />
          </div>
        </div>
        <div className="homeimage">
          <img src={back} />
        </div>
      </div>
      <div className="cta">
        <Link to="projects" smooth={true} duration={600}>
          <button className="btn-primary">View Projects</button>
        </Link>

        <Link to="contact" smooth={true} duration={600}>
          <button className="btn-secondary">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}
