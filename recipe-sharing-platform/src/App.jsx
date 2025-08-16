import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe Detail Page */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

