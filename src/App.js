import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/services" />
          <Route exact path="/products" />
          <Route exact path="/sign-up" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
