import { useRef } from "react";

import Input from "../UI/Input";

import classes from "./StoreItemForm.module.css";

const StoreItemForm = (props) => {
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountToNumber = +enteredAmount;

    props.addToOrder(enteredAmountToNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountRef}
        label="Amount:"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "3",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default StoreItemForm;
