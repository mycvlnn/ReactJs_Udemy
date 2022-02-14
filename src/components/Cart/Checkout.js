import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
import { isEmpty, isFiveChars } from "../../utils";

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeisValid = isFiveChars(enteredPostalCode);

    //validation
    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeisValid,
      city: enteredCityIsValid,
    });

    //autofocus vao truong nao invalid
    switch (false) {
      case enteredNameIsValid: {
        nameRef.current.focus();
        break;
      }
      case enteredStreetIsValid: {
        streetRef.current.focus();
        break;
      }
      case enteredPostalCodeisValid: {
        postalCodeRef.current.focus();
        break;
      }
      case enteredCityIsValid: {
        cityRef.current.focus();
        break;
      }

      default:
        break;
    }

    const isFormValid =
      enteredStreetIsValid &&
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeisValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const classNameControl = (name) => {
    return `${classes.control} ${
      !formInputValidity[name] ? classes.invalid : ""
    }`;
  };

  return (
    <section>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classNameControl("name")}>
          <label>Your name</label>
          <input ref={nameRef} type="text" />
          {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </div>

        <div className={classNameControl("street")}>
          <label>Street</label>
          <input ref={streetRef} type="text" />
          {!formInputValidity.street && <p>Please enter a valid street!</p>}
        </div>

        <div className={classNameControl("postalCode")}>
          <label>Postal Code</label>
          <input ref={postalCodeRef} type="text" />
          {!formInputValidity.postalCode && (
            <p>Please enter a valid postalCode (5 characters) !</p>
          )}
        </div>

        <div className={classNameControl("city")}>
          <label>City</label>
          <input ref={cityRef} type="text" />
          {!formInputValidity.city && <p>Please enter a valid street!</p>}
        </div>

        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
