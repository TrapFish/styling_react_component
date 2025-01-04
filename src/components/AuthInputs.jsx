import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import CustomInput from './Inpust';

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  console.log("Line 333 ::::",emailNotValid, passwordNotValid)
  return (
    <div id="auth-inputs">
      {/* <div className="controls"> */}
      <ControlDiv>
        <p>
          <CustomInput label="Email" type="email" invalid={emailNotValid} onChange={(event) => handleInputChange('email', event.target.value)}/>
          {/* <Label 
          $invalid = {emailNotValid}
          //className={`label ${emailNotValid ? 'invalid' : ''}`}
          >Email</Label> */}
          {/* <Input
            type="email"
            $invalid = {emailNotValid}
            //style={{backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'}}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          /> */}
        </p>
        <p>
        <CustomInput label="Password" type="password" invalid={passwordNotValid} onChange={(event) =>
              handleInputChange('password', event.target.value)
            }/>
          {/* <Label 
          $invalid = {passwordNotValid}
         // className={`label ${emailNotValid ? 'invalid' : ''}`}
          >Password</Label>
          <Input
            type="password"
            $invalid = {passwordNotValid}
            //className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          /> */}
        </p>
      </ControlDiv>
      {/* </div> */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
