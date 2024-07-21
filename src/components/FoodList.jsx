import FoodItem from "./FoodItem"

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food, index) => {
        return <FoodItem food={food} key={index} setFoodId={setFoodId} />
      })}
    </div>
  )
}