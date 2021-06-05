import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { PizzaFormData } from "../utils/pizzaFormTypes";

const PizzaForm: React.FC<InjectedFormProps<PizzaFormData>> = React.memo(
  (props) => {
    const { pristine, submitting, reset, handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
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
          <label>Number of Slices</label>
          <div>
            <Field
              name="no_of_slices"
              component="input"
              type="number"
              placeholder="no_of_slices"
              parse={(value: any) => +value}
            />
          </div>
        </div>
        <div>
          <label>Diameter</label>
          <div>
            <Field
              name="diameter"
              component="input"
              type="number"
              placeholder="diameter"
              parse={(value: any) => +value}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
);

export default reduxForm<PizzaFormData>({
  form: "pizza-form",
})(PizzaForm);
