import React, { useState } from "react";
import API from "../api/agent";
import { url } from "../secret/api";
import SoupForm from "./forms/SoupForm";
import PizzaForm from "./forms/PizzaForm";
import FoodType from "../components/FoodType";
import SandwichForm from "./forms/SandwichForm";
import styles from "./mainContainer.module.scss";

const MainContainer = () => {
  const [foodType, setFoodType] = useState("pizza");
  const handleSubmit = (data: any) => {
    if (foodType === "soup" && !data.spiciness_scale) data.spiciness_scale = 5;
    API.post(url, { ...data, type: foodType })
      .then((res) => res)
      .catch((err) => err);
  };

  const changeFoodType = (e: any) => {
    setFoodType(e.target.innerText.toLowerCase());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.foodTypeContainer}>
        <FoodType
          className={foodType === "pizza" ? styles.selected : ""}
          content="Pizza"
          clickHandler={changeFoodType}
        />
        <FoodType
          className={foodType === "soup" ? styles.selected : ""}
          content="Soup"
          clickHandler={changeFoodType}
        />
        <FoodType
          className={foodType === "sandwich" ? styles.selected : ""}
          content="Sandwich"
          clickHandler={changeFoodType}
        />
      </div>
      <div className={styles.container}>
        {
          {
            pizza: <PizzaForm onSubmit={handleSubmit} />,
            soup: <SoupForm onSubmit={handleSubmit} />,
            sandwich: <SandwichForm onSubmit={handleSubmit} />,
          }[foodType]
        }
      </div>
    </div>
  );
};

export default MainContainer;
