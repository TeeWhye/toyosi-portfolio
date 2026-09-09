import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />

      <div className="site-tech-background" aria-hidden="true">
        <span className="site-tech tech-react">React</span>
        <span className="site-tech tech-javascript">JavaScript</span>
        <span className="site-tech tech-python">Python</span>
        <span className="site-tech tech-django">Django</span>
        <span className="site-tech tech-next">Next.js</span>
        <span className="site-tech tech-postgres">PostgreSQL</span>
        <span className="site-tech tech-git">Git</span>
        <span className="site-tech tech-github">GitHub</span>
        <span className="site-tech tech-html">HTML5</span>
        <span className="site-tech tech-css">CSS3</span>
        <span className="site-tech tech-vite">Vite</span>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;