import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  }, [darkMode]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://backend-3-l903.onrender.com/api/recipes");
        setRecipes(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className={`container mt-4 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="text-end">
        <button className="btn btn-outline-secondary" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 className="text-center">Welcome to A2Z Recipe Book</h1>
      <p className="text-center">Discover and share delicious recipes from around the world.</p>

      {recipes.length === 0 ? (
        <div className="text-center">
          <p>No recipes found. Start by adding your first recipe!</p>
          <Link to="/add-recipe" className="btn btn-primary">Add Recipe</Link>
        </div>
      ) : (
        <>
          <h2 className="mt-4">Featured Recipes</h2>
          <div className="row">
            {recipes.map((recipe) => (
              <div className="col-md-4 mb-4" key={recipe._id}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/recipes" className="btn btn-secondary">View All Recipes</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
