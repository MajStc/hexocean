import React from "react";
import { Field } from "redux-form";
import styles from "../../utils/styles/input.module.scss";
import { BaseInputProps } from "../../utils/formTypes/inputTypes/baseInput";

const MyNumberInput = ({ name, placeholder, label }: BaseInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <Field
          name={name}
          component="input"
          type="number"
          placeholder={placeholder}
          parse={(values: any) => +values}
          autoComplete="off"
          className={styles.inputText}
        />
      </div>
    </div>
  );
};

export default MyNumberInput;
