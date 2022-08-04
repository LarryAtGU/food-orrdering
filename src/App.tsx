import React, { useState } from "react";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/meals";
import Cart from "./components/Cart/cart";
import CartContextProvier from "./store/cart-provider";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCardHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartContextProvier>
      {showCart && <Cart onHideCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCardHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvier>
  );
}

export default App;
