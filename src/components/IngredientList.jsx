import Ingredient from "./Ingredient"

export default function IngredientList({ food }) {
  return (
    <div>
      {food.extendedIngredients.map((ingredient, index) => {
          return <Ingredient ingredient={ingredient} key={index} />
        })}
    </div>
  )
}