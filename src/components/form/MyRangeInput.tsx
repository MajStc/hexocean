import React from "react";
import { Field } from "redux-form";
import { RangeInputProps } from "../../utils/formTypes/inputTypes/rangeInput";

const MyRangeInput = ({
  name,
  placeholder,
  label,
  from,
  to,
}: RangeInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <Field
          component="input"
          type="range"
          min={from}
          max={to}
          name={name}
          placeholder={placeholder}
          parse={(values: any) => +values}
        />
      </div>
    </div>
  );
};

export default MyRangeInput;
