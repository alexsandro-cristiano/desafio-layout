import React from "react";
import "./assets/styles/custom.scss";
import "./assets/styles/global.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
