import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { PizzaFormData } from "../../utils/pizzaFormTypes";

const SandwichForm: React.FC<InjectedFormProps> = React.memo((props) => {
  const { pristine, submitting, reset, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div>
        <label>Preparation Time</label>
        <div>
          <Field
            name="preparation_time"
            component="input"
            type="text"
            placeholder="preparation_time"
          />
        </div>
      </div>
      <div>
        <label>Slices of Bread</label>
        <div>
          <Field
            name="slices_of_bread"
            component="input"
            type="number"
            placeholder="Slices of Bread"
            parse={(values: any) => +values}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
});

export default reduxForm({
  form: "sandwich-form",
})(SandwichForm);
