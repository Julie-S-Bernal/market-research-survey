import React, {useState} from 'react';
import {redirect, withRouter} from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    //Improve name of variable
  const [redirect, setRedirect] = useState(false);

  const register = async(e) => {
    e.preventDefault();
    let user = await firebaseConfig.register(email, password)
    console.log(user);
  }

  return (
      <>
       <form onSubmit={register}>
           <h1>Create your user profile</h1>
         <label htmlFor='email'>Email: </label>
         <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} ></input>
         <label htmlFor='email'>Password: </label>
         <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} ></input>
         <input type='Submit' value='register' />
       </form>
      </>
  )
}
export default withRouter(Register);
