import { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../store/auth-context";
import Button from "../Button/Button";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const [isSending, setIsSending] = useState(false);
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //validate
    if (!enteredNewPassword) return;
    try {
      setIsSending(true);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA3JNrobkyWUjoHwlDlZHToS5fxJYpi92Q",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Change password failed. Please try again.");
      }
      const data = await response.json();

      console.log("data", data);
      history.replace("/");
    } catch (error) {
      alert(error);
    }
    setIsSending(false);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordInputRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <Button isLoading={isSending} textLoading="Sending...">
          Change password
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
