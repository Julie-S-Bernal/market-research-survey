import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const login = async(event) => {
    event.preventDefault();
    let response = await firebaseConfig.login(email, password);
    if(response.hasOwnProperty('message')){
      setLoginError(true)
    }
    if(response.hasOwnProperty('user')){
      props.history.push('/')
    }
  }

  return (
      <>
       <form onSubmit={login}>
          <h1>Sign into your account</h1>
          <label htmlFor='email'>Email: </label>
          <input type="email" name='email' onChange={(event) => setEmail(event.target.value)} ></input>
          <label htmlFor='email'>Password: </label>
          <input type="password" name='password' onChange={(event) => setPassword(event.target.value)} ></input>
          <input type='submit' value='login' />
          {loginError && <span>Something went wrong! (╥_╥) </span>}
       </form>
      </>
  )
}
export default withRouter(Login);
