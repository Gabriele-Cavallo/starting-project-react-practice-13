import { useInput } from "../hooks/useInput.js";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const emailIsInvalid = enteredValues.email !== '' && !enteredValues.email.includes('@');
  const {
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur ,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError} = useInput('', (value) => hasMinLength(value, 6));
  // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);
  
  function handlesSubmit(event){
    event.preventDefault();

    if(emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
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
        <Input 
          id="email"
          type="email" 
          name="email" 
          label="Email" 
          onChange={handleEmailChange}
          onBlur={handleEmailBlur} 
          value={emailValue}
          error={emailHasError && 'Please enter a valid email.'}
        />
        <Input 
          id="password"
          type="password" 
          name="password" 
          label="Password" 
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur} 
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
