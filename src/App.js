import { Routes, Route } from "react-router-dom";

import MyNavbar from "./layouts/MyNavbar";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";
import AboutMember from "./pages/AboutMember";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <MyNavbar></MyNavbar>

      {/* Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<AboutMember />} />
          <Route path="location" element={<About />} />
        </Route>

        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
