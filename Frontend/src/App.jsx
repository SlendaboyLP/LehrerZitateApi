import { useState } from "react";
import React from "react";
import AddQuote from "./AddQuote";
import ReadAllQuotes from "./ReadAllQuotes";
import EditQuote from "./EditQuote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReadAllQuotes />} />
        <Route path="/add" element={<AddQuote />} />
        <Route path="/edit/:id" element={<EditQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
