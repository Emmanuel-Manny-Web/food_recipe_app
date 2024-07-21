import { useEffect, useState } from "react"
import styles from "../styles/fooddetails.module.css"
import IngredientList from "./IngredientList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "986a55a0515a48feb008007beae48d0e";
  useEffect(() => {
    async function fetchFoodDetails() {
      if (foodId) {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        setFood(data)
        setIsLoading(false)
      }
    }
    fetchFoodDetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            🧑‍🤝‍🧑<strong>Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing} per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        {isLoading ? "" : <IngredientList food={food} />}
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ol>
              {food.analyzedInstructions[0].steps.map((step, index) => {
                return <li key={index}>{step.step}</li>;
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}