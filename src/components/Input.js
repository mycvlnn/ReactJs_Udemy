import "../styles/input.css"
function InputField(props) {
  const { label, type, name, handleChange, errorMessage, isValid, value } =
    props
  return (
    <div className="input-container">
      <label>{label}</label>
      <input value={value} type={type} name={name} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  )
}
export default InputField
