import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react"

import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"
import AuthContext from "../../store/authContext"
import Input from "../UI/Input/Input"
import classes from "./Login.module.css"

const initialState = {
  enteredEmail: "",
  enteredPassword: "",
  emailIsValid: null,
  passwordIsValid: null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "EMAIL_INPUT": {
      return {
        ...state,
        enteredEmail: payload,
        emailIsValid: payload.includes("@"),
      }
    }
    case "EMAIL_BLUR": {
      return { ...state, emailIsValid: state.enteredEmail.includes("@") }
    }
    case "PASSWORD_INPUT": {
      return {
        ...state,
        enteredPassword: payload,
        passwordIsValid: payload.trim().length > 6,
      }
    }
    case "PASSWORD_BLUR": {
      return {
        ...state,
        passwordIsValid: state.enteredPassword.trim().length > 6,
      }
    }
    default:
      return state
  }
}

const Login = (props) => {
  const ctx = useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { enteredEmail, enteredPassword, emailIsValid, passwordIsValid } = state
  const emailRef = useRef()
  const passwordRef = useRef()
  const emailChangeHandler = (event) => {
    dispatch({
      type: "EMAIL_INPUT",
      payload: event.target.value,
    })
  }

  const passwordChangeHandler = (event) => {
    dispatch({
      type: "PASSWORD_INPUT",
      payload: event.target.value,
    })
  }

  const validateEmailHandler = () => {
    dispatch({
      type: "EMAIL_BLUR",
    })
  }

  const validatePasswordHandler = () => {
    dispatch({
      type: "PASSWORD_BLUR",
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (formIsValid) {
      ctx.onLogin(enteredEmail, enteredPassword)
    } else if (!emailIsValid) {
      emailRef.current.focus()
    } else {
      passwordRef.current.focus()
    }
  }

  useEffect(() => {
    const idTimer = setTimeout(() => {
      //Giả sử trong đây là http request thì chúng ta đã cải thiện nó thay vì gửi hàng tá request lên server
      //Thì chúng ta chỉ cần gửi một lần duy nhất sau khi người dùng không bấm phím nữa
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 400)
    //cleanup function ham nay se duoc chay truoc khi callback cua useEffect dươc chạy ngoại trừ lần đầu tiên
    return () => {
      clearTimeout(idTimer)
    }
  }, [emailIsValid, passwordIsValid])

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          value={enteredEmail}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          value={enteredPassword}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
