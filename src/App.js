import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import NoPage from "./Components/NoPage";
import Terms from "./Components/Terms";
import { useState } from "./hooks/CusModules";
import Dashboard from "./Components/Dashboard";

function App() {
  const [searchData, setSearchData] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const updateData = (newData) => {
    setSearchData(newData);
  };

  const updateMenuOpen = (data) => {
    console.log("setMenuOpen value", data);
    setMenuOpen(data);
  };

  return (
    <div className="App">
      <Navbar
        {...{ updateData, updateMenuOpen, menuOpen }}
        // updateData={updateData}
        // updateMenuOpen={updateMenuOpen}
        // menuOpen={menuOpen}
      />
      {console.log("window.location.href in App.js", window.location.href)}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home {...{ searchData, menuOpen, updateMenuOpen }} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
