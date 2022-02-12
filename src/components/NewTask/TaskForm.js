import { useRef } from "react";
import Button from "../Button/Button";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <Button isLoading={props.loading} contentLoading="Sending...">
        AddTask
      </Button>
    </form>
  );
};

export default TaskForm;
