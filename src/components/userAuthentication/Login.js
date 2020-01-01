import React, {useState} from 'react';
import {redirect, withRouter} from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const login = async(event) => {
      event.preventDefault();
      await firebaseConfig.login(email, password);
      props.history.push('/')
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
       </form>
      </>
  )
}
export default withRouter(Login);
