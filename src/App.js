import "./App.css";
import Background from "./Components/particle";
import Home from "./Components/Home";
import Skills from "./Components/skills";
import Projects from "./Components/Projects";
import Contact from "./Components/contact";

function App() {
  return (
    <div>
      <Background id='particle' />
      <section id="home"><Home /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>  
    </div>
  );
}

export default App;
