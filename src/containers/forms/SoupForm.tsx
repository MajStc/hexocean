import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import MyRangeInput from "../../components/form/MyRangeInput";
import MyTextInput from "../../components/form/MyTextInput";
import styles from "../../utils/styles/submit.module.scss";
const SoupForm: React.FC<InjectedFormProps> = React.memo((props) => {
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
      <MyRangeInput
        name="spiciness_scale"
        placeholder="Spiciness Scale"
        label="Spiciness Scale"
        from={0}
        to={10}
      />
      <button type="submit" className={styles.myButton}>
        Submit
      </button>
    </form>
  );
});

export default reduxForm({
  form: "soup-form",
})(SoupForm);
