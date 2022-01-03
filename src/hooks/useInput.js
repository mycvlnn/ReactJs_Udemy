import { useState } from "react"

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value)
  }

  const inputBlurHandler = (e) => {
    setIsTouched(true)
  }

  const resetValue = () => {
    setEnteredValue("")
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    resetValue,
  }
}
export default useInput
