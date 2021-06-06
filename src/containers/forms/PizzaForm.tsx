import React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import MyNumberInput from "../../components/form/MyNumberInput";
import styles from "../../utils/styles/submit.module.scss";
import MyTextInput from "../../components/form/MyTextInput";

const PizzaForm: React.FC<InjectedFormProps> = React.memo((props) => {
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
        name="no_of_slices"
        placeholder="Number of Slices"
        label="Number of Slices"
      />
      <MyNumberInput name="diameter" placeholder="Diameter" label="Diameter" />
      <button type="submit" className={styles.myButton}>
        Submit
      </button>
    </form>
  );
});

export default reduxForm({
  form: "pizza-form",
})(PizzaForm);
