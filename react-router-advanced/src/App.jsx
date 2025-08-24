import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import BlogPost from "./components/BlogPost"; // 👈 make sure this file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsComponent />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* 👈 now BlogPost is used */}
      </Routes>
    </Router>
  );
}

export default App;
