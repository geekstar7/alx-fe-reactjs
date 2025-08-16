import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              View Recipe
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
