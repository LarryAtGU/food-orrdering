import React from "react";
import HeaderCartButton from "./headercart";
import "./header.css";
import mealImage from "../../assets/meals.jpg";

type Prop = {
  onShowCart: () => void;
};

const Header = (prop: Prop) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={prop.onShowCart}></HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={mealImage} alt="Meal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
