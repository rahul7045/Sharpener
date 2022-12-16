import React from "react";
import Header from "./Components/Layout/Header";
import Card from "./Components/UI/Card";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
   <>
   <Cart />
     <Header />
     <Card />
     <Meals />
   </>
  )
}

export default App;
