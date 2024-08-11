import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  // const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@');
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handlesSubmit(event){
    event.preventDefault();
  }
  
  function handleInputChange(identifier, input){
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: input.target.value
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }
  // function handleEmailChange(event){
  //   const email = event.target.value;
  //   setEnteredEmail(email);
  // }
  // function handlePasswordChange(event){
  //   const password = event.target.value;
  //   setEnteredPassword(password);
  // }
  return (
    <form onSubmit={handlesSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onBlur={() => handleInputBlur('email')} value={enteredValues.email} onChange={(event) => handleInputChange('email', event)} id="email" type="email" name="email" />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onBlur={() => handleInputBlur('password')} value={enteredValues.password} onChange={(event) => handleInputChange('password', event)} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
