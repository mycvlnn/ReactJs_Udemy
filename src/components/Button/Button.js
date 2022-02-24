import classes from "./Button.module.css";

const Button = ({ children, isLoading, textLoading }) => {
  return (
    <button type="submit" className={classes.button} disabled={isLoading}>
      {isLoading ? textLoading : children}
    </button>
  );
};

export default Button;
