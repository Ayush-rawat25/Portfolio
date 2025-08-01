import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaLock, FaLeaf, FaCss3, FaJs, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGoogle } from "react-icons/si";
import "./Slider.css";
import scheduler from "../assets/ai-sheduler.png";
import saferoute from "../assets/saferoute.png";
import newsapp from "../assets/news-app.png";

const Projects = () => {
  const sliderSectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const slides = horizontalRef.current.children.length;
      setScrollWidth((slides - 1) * window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const section = sliderSectionRef.current;
    const scrollTop = window.scrollY - section.offsetTop;
    const maxScroll = scrollWidth;

    if (scrollTop >= 0 && scrollTop <= maxScroll) {
      horizontalRef.current.style.transform = `translateX(-${scrollTop}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollWidth]);

  return (
    <section
      className="slider-section"
      ref={sliderSectionRef}
      style={{ height: `${scrollWidth + window.innerHeight}px` }}
    >
      <div className="sticky-wrapper">
        <div className="horizontal-slider" ref={horizontalRef}>
          {/* Intro Slide */}
          <div className="slide">
            <h1>Projects</h1>
            <br />
            <p className="text-xl px-6 md:px-48 text-center md:text-left">
              Every project I build is a step toward solving real-world problems
              with clean code and intuitive design. Here, you’ll find applications
              where I’ve blended technology and creativity—pushing myself to learn,
              innovate, and deliver impactful solutions.
            </p>
            <p className="text-xl px-6 md:px-48 text-center md:text-left mt-4">
              From building responsive UIs to architecting end-to-end web
              applications, these projects highlight my expertise across
              frontend, backend, databases, and DevOps. Dive in to explore how I
              turn ideas into fully functional solutions.
            </p>
            <br />
            <p id="cotinue">
              Continue with Innovative <span className="text-blue-800">Projects</span> →
            </p>
          </div>

          {/* SafeRoute */}
          <div className="slide project-slide">
            <div className="project-container">
              <div className="project-text">
                <h1 className="text-3xl font-bold mb-4">SAFEROUTE</h1>
                <p className="text-gray-200 text-lg mb-4">
                  SafeRoute is a smart routing app that scans the map for dangerous
                  areas and tells the safest route. It provides heatmaps to indicate 
                  risky areas and uses algorithms to avoid as many red zones as possible.
                  Additional features make your travel safer.
                </p>
                <div className="tech-icons">
                  <FaReact title="ReactJS" />
                  <SiExpress title="ExpressJS" />
                  <SiMongodb title="MongoDB" />
                  <FaLeaf title="LeafletJS" />
                  <FaNodeJs title="Node.js" />
                </div>
                <div className="links">
                  <a href="https://github.com/Ayush-rawat25/Saferoute" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a href="https://scheduler-deployed-link.com" target="_blank" rel="noopener noreferrer">
                    🌐 Live App
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src={saferoute} alt="SafeRoute App Screenshot" />
              </div>
            </div>
          </div>

          {/* AI Scheduler */}
          <div className="slide project-slide">
            <div className="project-container">
              <div className="project-text">
                <h1 className="text-3xl font-bold mb-4">AI - SCHEDULER</h1>
                <p className="text-gray-200 text-lg mb-4">
                  AI Scheduler is a smart scheduling app that integrates with Google
                  Calendar to manage meetings and tasks. It suggests optimal time slots,
                  prevents overlaps, and auto-reschedules for improved productivity.
                </p>
                <div className="tech-icons">
                  <FaReact title="ReactJS" />
                  <SiExpress title="ExpressJS" />
                  <SiMongodb title="MongoDB" />
                  <FaLock title="OAuth" />
                  <SiGoogle title="Google APIs" />
                  <FaNodeJs title="Node.js" />
                </div>
                <div className="links">
                  <a href="https://github.com/Ayush-rawat25/Work-Scheduler" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a href="https://scheduler-deployed-link.com" target="_blank" rel="noopener noreferrer">
                    🌐 Live App
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src={scheduler} alt="AI Scheduler App Screenshot" />
              </div>
            </div>
          </div>

          {/* News App */}
          <div className="slide project-slide">
            <div className="project-container">
              <div className="project-text">
                <h1 className="text-3xl font-bold mb-4">NEWS - APP</h1>
                <p className="text-gray-200 text-lg mb-4">
                  NewsMonkey is a modern news app built with React that keeps you updated
                  with trending headlines worldwide. It offers real-time news across 
                  categories like Technology, Sports, Business, Entertainment, and Health 
                  with a clean, responsive UI.
                </p>
                <div className="tech-icons">
                  <FaHtml5 title="HTML5" />
                  <FaCss3 title="CSS" />
                  <FaJs title="JavaScript" />
                  <FaReact title="ReactJS" />
                </div>
                <div className="links">
                  <a href="https://github.com/Ayush-rawat25/NewsApp" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a href="https://newsmonkey-app-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    🌐 Live App
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src={newsapp} alt="News App Screenshot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
