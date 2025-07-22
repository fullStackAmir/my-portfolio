import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-gray-100 text-gray-600 ">
      <Navbar />
      <Home />
      <Skills />
      <About />
    </div>
  );
}
export default App;

