import React, { useState } from "react";

import styles from "./mainContainer.module.scss";
import PizzaForm from "./forms/PizzaForm";
import axios from "axios";
import { PizzaFormData } from "../utils/pizzaFormTypes";
import { url } from "../secret/api";

const MainContainer = () => {
  const [foodType, setFoodType] = useState("pizza");
  const handleSubmit = (data: PizzaFormData) => {
    axios
      .post(url, { ...data, type: foodType })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const changeFoodType = (e: any) => {
    setFoodType(e.target.innerHTML.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <div className={styles.foodTypeContainer}>
        <div onClick={changeFoodType}>Pizza</div>
        <div onClick={changeFoodType}>Sandwich</div>
        <div onClick={changeFoodType}>Soup</div>
      </div>
      <PizzaForm onSubmit={handleSubmit} />
    </div>
  );
};

export default MainContainer;
