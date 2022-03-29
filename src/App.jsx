import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Technology from "./components/Technology";
import Darkmode from "./components/Darkmode";
import Lightmode from "./components/Lightmode";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
