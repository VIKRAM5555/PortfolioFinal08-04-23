import { About } from "./About";
import { Address } from "./Address";
import "./App.css";
import { Experience } from "./Experience";
import { LetterMotion } from "./LetterMotion";
import { Project } from "./Project";
import { Resume } from "./Resume";
import { Skills } from "./Skills";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LetterMotion />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Address" element={<Address />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
