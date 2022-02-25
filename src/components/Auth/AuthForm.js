import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Button from "../Button/Button";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitApiHandler = async (url, values) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("data", data);

      if (!response.ok) {
        throw new Error(data.error.message);
      } else {
        login(data.idToken);
        history.replace("/");
      }
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //some validate
    if (!enteredEmail || !enteredPassword) {
      alert("Please enter these fields");
      return;
    }

    const body = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    if (isLogin) {
      submitApiHandler(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3JNrobkyWUjoHwlDlZHToS5fxJYpi92Q",
        body
      );
    } else {
      submitApiHandler(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3JNrobkyWUjoHwlDlZHToS5fxJYpi92Q",
        body
      );
    }

    console.log("submiting...");
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInputRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={classes.actions}>
          <Button isLoading={isLoading} textLoading="Sending...">
            {isLogin ? "Login" : "Create Account"}
          </Button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
