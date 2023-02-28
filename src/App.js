import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Schemes from "./components/Schemes";
import { Routes } from "react-router-dom/dist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path="/" />

        <Route element={<Schemes />} path="/schemes" />

        <Route element={<About />} path="/about" />

        <Route element={<Contact />} path="/contact" />

        <Route element={<Login />} path="/login" />

        <Route element={<Signup />} path="/signup" />
      </Routes>
    </>
  );
}

export default App;
