import "./styles.css";
// import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Bonda" element={<Bonda />} />
        <Route path="/Honda" element={<Honda />} />
      </Routes>
    </div>
  );
}
