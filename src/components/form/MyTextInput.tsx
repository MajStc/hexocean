import React from "react";
import { Field } from "redux-form";
import styles from "../../utils/styles/input.module.scss";
import { BaseInputProps } from "../../utils/formTypes/inputTypes/baseInput";

const MyTextInput = ({
  name,
  placeholder,
  label,
  pattern,
  oninvalid,
}: BaseInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <Field
          name={name}
          component="input"
          type="text"
          placeholder={placeholder}
          className={styles.inputText}
          autoComplete="off"
          pattern={pattern ? pattern : null}
          title={oninvalid ? oninvalid : ""}
        />
      </div>
    </div>
  );
};

export default MyTextInput;
