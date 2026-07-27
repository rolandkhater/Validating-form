import { useState } from "react";
import Input from "./Input.jsx";

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
  didEdit.email && !enteredInput.email.includes('@');

  const passwordInvalid = didEdit.email && enteredInput.password.trim().length < 6;


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

        <Input 
        label="email" 
        id="email"
        type="email" 
          name="email" 
          onBlur={() => handleInputBlur('email')} 
          onChange={(event) => {handleEmailChange('email',event.target.value )}} 
          value={enteredInput.email}
          error={emailInvalid && 'email is not valid'}/>
        
     <Input 
        label="password" 
        id="password"
        type="password" 
          name="password" 
          onBlur={() => handleInputBlur('password')} 
          onChange={(event) => {handleEmailChange('password',event.target.value )}} 
          value={enteredInput.password}
          error={passwordInvalid && 'password is not valid'}/>
        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
