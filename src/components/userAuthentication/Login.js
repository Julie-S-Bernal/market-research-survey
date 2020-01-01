import React, {useState} from 'react';
import {redirect, withRouter} from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const login = () => {
      console.log('login user')
  }

  return (
      <>
       <form onSubmit={login}>
         <h1>Sign into your account</h1>
         <label htmlFor='email'>Email: </label>
         <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} ></input>
         <label htmlFor='email'>Password: </label>
         <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} ></input>
         <input type='submit' value='login' />
       </form>
      </>
  )
}
export default withRouter(Login);
