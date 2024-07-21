import styles from "../styles/ingredient.module.css"

export default function Ingredient({ ingredient }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` +
              ingredient.image
            }
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
}