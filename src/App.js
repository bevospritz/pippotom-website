import React, { useState, useEffect } from "react";
import Preloader from "./routes/Pre";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Portfolio from "./routes/Portfolio";
import Footer from "./routes/Footer";
import Resume from "./routes/Resume";
import Contacts from "./routes/Contacts";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./styles.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
    return (
      <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;