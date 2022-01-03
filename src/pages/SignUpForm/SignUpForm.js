import React from "react"
import useForm from "../../hooks/useForm"
import { signupForm } from "../../utils/formConfig"

import "./SignupForm.css"

export default function SignupForm() {
  const { renderFormInputs, isFormValid } = useForm(signupForm)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid) return
    const data = new FormData(e.target)
    alert(JSON.stringify(Object.fromEntries(data.entries())))
  }
  return (
    <form onSubmit={handleSubmit} className="signupForm">
      <h1>Sign Up</h1>

      {renderFormInputs()}

      <button disabled={!isFormValid} type="submit">
        Submit
      </button>
    </form>
  )
}
