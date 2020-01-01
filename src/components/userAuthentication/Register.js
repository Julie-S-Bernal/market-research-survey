import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState(false);

  const register = async(event) => {
    event.preventDefault();
    let response = await firebaseConfig.register(email, password)
    if(response.hasOwnProperty('message')){
      setRegisterError(true)
    }
    if(response.hasOwnProperty('user')){
      props.history.push('/')
    }
  }

  return (
      <>
       <form onSubmit={register}>
          <h1>Create your user profile</h1>
          <label htmlFor='email'>Email: </label>
          <input type="email" name='email' onChange={(event) => setEmail(event.target.value)} ></input>
          <label htmlFor='email'>Password: </label>
          <input type="password" name='password' onChange={(event) => setPassword(event.target.value)} ></input>
          <input type='Submit' value='register' />
          {registerError && <span>You could not be registered, try again! (╥_╥)</span>}
       </form>
      </>
  )
}
export default withRouter(Register);
