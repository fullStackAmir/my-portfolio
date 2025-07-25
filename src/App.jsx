import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import './index.css';

function App() {
  return (
      <div className="relative bg-gray-100 dark:bg-gray-950 text-gray-600 dark:text-gray-400 transition-colors duration-200 ">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
export default App;

