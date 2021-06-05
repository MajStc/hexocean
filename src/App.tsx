import axios from "axios";
import React from "react";
import PizzaForm from "./containers/PizzaForm";
import { url } from "./secret/api";
import { PizzaFormData } from "./utils/pizzaFormTypes";

function App() {
  const handleSubmit = (data: PizzaFormData) => {
    axios
      .post(url, { ...data, type: "pizza" })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <PizzaForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
