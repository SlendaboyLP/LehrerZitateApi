import { useState } from "react";
import React from "react";
import AddQuote from "./AddQuote";
import ReadAllQuotes from "./ReadAllQuotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReadAllQuotes />} />
        <Route path="/add" element={<AddQuote />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
