// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import NoPage from "./Components/NoPage";
import Terms from "./Components/Terms";
import { useState } from "./hooks/CusModules";

function App() {
  const [searchData, setSearchData] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const updateData = (newData) => {
    setSearchData(newData);
  };

  const updateMenuOpen = (data) => {
    setMenuOpen(data);
  };

  return (
    <div className="App">
      <Navbar
        updateData={updateData}
        updateMenuOpen={updateMenuOpen}
        menuOpen={menuOpen}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home searchValue={searchData} menuValue={menuOpen} />}
            />
            <Route path="/About" element={<About />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
