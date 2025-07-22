import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-gray-100 text-gray-600 ">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      
    </div>
  );
}
export default App;

