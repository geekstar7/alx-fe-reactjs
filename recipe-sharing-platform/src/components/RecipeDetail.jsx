import React from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  // Dummy recipe data (replace with API or state later)
  const recipe = {
    id,
    title: "Delicious Pasta",
    description: "A simple yet tasty pasta recipe with fresh tomatoes and herbs.",
    ingredients: ["Pasta", "Tomatoes", "Basil", "Olive Oil", "Salt", "Pepper"],
    instructions: "Boil pasta, prepare sauce, mix, and serve hot.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-4 text-gray-700">{recipe.description}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p className="text-gray-700 mb-6">{recipe.instructions}</p>

      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Recipes
      </Link>
    </div>
  );
}

export default RecipeDetail;
