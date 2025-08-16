import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          RecipeShare
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
