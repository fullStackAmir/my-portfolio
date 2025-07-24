import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-600 ">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}
export default App;

