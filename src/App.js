import './App.css';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
