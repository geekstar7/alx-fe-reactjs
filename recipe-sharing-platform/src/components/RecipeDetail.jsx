// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // fetch recipes from public/data.json
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.recipes.find(
          (item) => item.id === parseInt(id, 10)
        );
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-lg mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-6 inline-block text-lg"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe Image */}
      <div className="mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{recipe.title}</h1>

      {/* Ingredients */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Instructions
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
