import React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import styles from "../../utils/styles/submit.module.scss";
import MyTextInput from "../../components/form/MyTextInput";
import MyNumberInput from "../../components/form/MyNumberInput";

const SandwichForm: React.FC<InjectedFormProps> = React.memo((props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <MyTextInput name="name" placeholder="Name" label="Name" />
      <MyTextInput
        name="preparation_time"
        placeholder="Preparation Time"
        label="Preparation Time"
        pattern="[\d\d:\d\d:\d\d]{8}"
        oninvalid="HH:MM:SS"
      />
      <MyNumberInput
        name="slices_of_bread"
        label="Slices of Bread"
        placeholder="Slices of Bread"
      />
      <button type="submit" className={styles.myButton}>
        Submit
      </button>
    </form>
  );
});

export default reduxForm({
  form: "sandwich-form",
})(SandwichForm);
