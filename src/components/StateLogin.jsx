import { useState } from "react";

export default function Login() {
  const [enteredInput, setEnteredInput ] = useState({
    email: '',
    password: ''
  });

  const [ didEdit, setDidEdit ] = useState({
    email: false,
    password: false
  })

  const emailInvalid =
  didEdit.email && !enteredInput.email.includes('@')

function handleSubmit(event){
  event.preventDefault();
  console.log('submit')
  console.log(enteredInput)
}

function handleEmailChange(identifier, value){
setEnteredInput((prev) => ({
  ...prev,
  [identifier] : value,
}))
setDidEdit((prevEdit) => ({
  ...prevEdit,
  [identifier]: false
}))
}

function handleInputBlur(identifier){
  setDidEdit((prevEdit) => ({
    ...prevEdit,
    [identifier]: true
  }))
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={(event) => {handleEmailChange('email',event.target.value )}} value={enteredInput.email} />
        <div className="control-error">{emailInvalid && <p>Please enter a valid email adress</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => {handleEmailChange('password', event.target.value)}} value={enteredInput.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
