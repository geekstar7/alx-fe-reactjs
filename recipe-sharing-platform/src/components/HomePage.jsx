import React from "react";
import RecipeList from "./RecipeList";

function HomePage() {
  // Dummy recipe data
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with rich meat sauce.",
      image: "https://source.unsplash.com/400x300/?pasta",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "A flavorful curry with tender chicken pieces.",
      image: "https://source.unsplash.com/400x300/?curry",
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy stir fry with fresh vegetables.",
      image: "https://source.unsplash.com/400x300/?vegetables",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Featured Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default HomePage;
