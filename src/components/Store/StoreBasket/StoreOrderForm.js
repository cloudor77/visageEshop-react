import { useState, useRef } from "react";

import classes from "./StoreOrderForm.module.css";

const isEmpty = (val) => {
  return val.trim() === "";
};

const includesEmail = (val) => {
  return val.includes("@");
};

const includesNumbers = (val) => {
  return val.match(/\d/) !== null;
};

const StoreOrderForm = (props) => {
  const [isFormValid, setIsFormValid] = useState({
    name: true,
    lastName: true,
    email: true,
    phone: true,
    address: true,
    city: true,
  });

  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameValidity = !isEmpty(enteredName);
    const enteredLastNameValidity = !isEmpty(enteredLastName);
    const enteredEmailValidity =
      !isEmpty(enteredEmail) && includesEmail(enteredEmail);
    const enteredPhoneValidity =
      !isEmpty(enteredPhone) && includesNumbers(enteredPhone);
    const enteredAddressValidity = !isEmpty(enteredAddress);
    const enteredCityValidity = !isEmpty(enteredCity);

    setIsFormValid({
      name: enteredNameValidity,
      lastName: enteredLastNameValidity,
      email: enteredEmailValidity,
      phone: enteredPhoneValidity,
      address: enteredAddressValidity,
      city: enteredCityValidity,
    });

    const fullFormValidity =
      enteredNameValidity &&
      enteredLastNameValidity &&
      enteredEmailValidity &&
      enteredPhoneValidity &&
      enteredAddressValidity &&
      enteredCityValidity;

    if (!fullFormValidity) return;
  };

  const enteredNameInvalid = `${classes.formStyle} ${
    !isFormValid.name ? classes.invalid : ""
  }`;

  const enteredLastNameInvalid = `${classes.formStyle} ${
    !isFormValid.lastName ? classes.invalid : ""
  }`;

  const enteredEmailInvalid = `${classes.formStyle} ${
    !isFormValid.email ? classes.invalid : ""
  }`;

  const enteredPhoneInvalid = `${classes.formStyle} ${
    !isFormValid.phone ? classes.invalid : ""
  }`;

  const enteredAddressInvalid = `${classes.formStyle} ${
    !isFormValid.address ? classes.invalid : ""
  }`;

  const enteredCityInvalid = `${classes.formStyle} ${
    !isFormValid.city ? classes.invalid : ""
  }`;

  return (
    <div className={classes.formSpace}>
      <form onSubmit={submitForm}>
        <div className={enteredNameInvalid}>
          <label>First Name:</label>
          <input type="text" ref={nameRef} />
          {!isFormValid.name && <p>Warning</p>}
        </div>
        <div className={enteredLastNameInvalid}>
          <label>Last Name:</label>
          <input type="text" ref={lastNameRef} />
        </div>
        <div className={enteredEmailInvalid}>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
        </div>
        <div className={enteredPhoneInvalid}>
          <label>Phone:</label>
          <input type="number" ref={phoneRef} />
        </div>
        <div className={enteredAddressInvalid}>
          <label>Address:</label>
          <input type="text" ref={addressRef} />
        </div>
        <div className={enteredCityInvalid}>
          <label>City:</label>
          <input type="text" ref={cityRef} />
        </div>
        <button>Confirm </button>
      </form>
    </div>
  );
};

export default StoreOrderForm;
