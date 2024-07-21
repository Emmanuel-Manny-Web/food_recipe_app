import { useEffect } from "react";
import { useState } from "react"
import styles from '../styles/search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "986a55a0515a48feb008007beae48d0e";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("")
  useEffect(() => {
    if (query) {
     async function fetchFood() {
       const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
       const data = await res.json();
       setFoodData(data.results);
     }
     fetchFood(); 
    }
  }, [query])
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}

export default Search
