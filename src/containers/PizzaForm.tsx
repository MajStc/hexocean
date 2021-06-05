import React, { useState } from "react";
import axios from "axios";
import { url } from "../secret/api";

const PizzaForm = () => {
  const [name, setName] = useState("");
  const [preparation_time, setPreparationTime] = useState("");
  const [no_of_slices, setNoOfSlices] = useState(0);
  const [diameter, setDiameter] = useState(0);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handlePreparationTimeChange = (e: any) => {
    setPreparationTime(e.target.value);
  };

  const handleNoOfSlicesChange = (e: any) => {
    setNoOfSlices(e.target.value);
  };

  const handleDiamatereChange = (e: any) => {
    setDiameter(e.target.value);
  };

  const handleSubmit = (e: any) => {
    console.log(
      name,
      preparation_time,

      no_of_slices,
      diameter
    );
    e.preventDefault();
    console.log("blabla");
    axios
      .post(url, {
        name,
        preparation_time,
        type: "pizza",
        no_of_slices,
        diameter,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="name"
        />
      </label>
      <label>
        Preparation Time:
        <input
          type="text"
          value={preparation_time}
          onChange={handlePreparationTimeChange}
          placeholder="preparation time"
        />
      </label>
      <label>
        Number of Slices:
        <input
          type="number"
          value={no_of_slices}
          onChange={handleNoOfSlicesChange}
          placeholder="name"
        />
      </label>
      <label>
        Diamaeter:
        <input
          type="number"
          value={diameter}
          onChange={handleDiamatereChange}
          placeholder="name"
        />
      </label>
      <label>
        Submit:
        <input type="submit" onClick={handleSubmit} />
      </label>
    </>
  );
};

export default PizzaForm;
