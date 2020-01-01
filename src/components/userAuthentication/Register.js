import React, {useState} from 'react';
import {redirect, withRouter} from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    //Improve name of variable
  const [redirect, setRedirect] = useState(false);

  const register = async(event) => {
    event.preventDefault();
    await firebaseConfig.register(email, password)
    props.history.push('/')
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
       </form>
      </>
  )
}
export default withRouter(Register);
