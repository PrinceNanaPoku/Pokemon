import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import ListView from "./components/ListView";
import DetailView from "./components/DetailView";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pokemon" element={<ListView />} />
          <Route path="/pokemon/0" element={<DetailView />} />
          <Route path="/pokemon/1" element={<DetailView />} />
          <Route path="/pokemon/2" element={<DetailView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
