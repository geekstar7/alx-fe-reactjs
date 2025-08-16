import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
    <Router>
      <nav className="bg-blue-500 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/recipe/1" className="hover:underline">Recipe Details</Link>
        <Link to="/add" className="hover:underline">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;

