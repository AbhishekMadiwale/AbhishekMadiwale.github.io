import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ProjectDisplay from "./Pages/ProjectDisplay";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
