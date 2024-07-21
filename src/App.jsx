import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import './styles/App.css'
import Container from "./components/Container"
import FoodDetails from "./components/FoodDetails"
import InnerContainer from "./components/InnerContainer"

function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("")
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App
