import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import PostDetail from "./components/PostDetail"; // <- you'll need this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsComponent />} />
        <Route path="/blog/:id" element={<PostDetail />} /> {/* <- missing route */}
      </Routes>
    </Router>
  );
}

export default App;
