import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import firebaseConfig from '../../firebaseConfig'

const FormWrapper=styled.div`
  max-width: 30%;
  min-width: 300px;
  padding: 50px 30px 50px 30px;
  margin: 50px auto;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);

  .formInput{
    position: relative;
    padding: 12px 0px 5px 0;
    width: 100%;
    outline: 0;
    border: 0;
    box-shadow: 0 1px 0 0 #e5e5e5;
    transition: box-shadow 150ms ease-out;

    &:focus {
    box-shadow: 0 2px 0 0 blue;
    }
  }

  .button {
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    height: 35px;
    width: 100px;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    background: rgba(59,173,227,1);
    background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    font-size: 12px;
    border: none;
    margin-left: 10px;
    border-radius: 3px;
    text-align: center;

    span {
      position: relative;
      top: 16px;
    }
  }
`;

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
    <Container>
      <Row>
        <Col col={12}>
          <FormWrapper>
            <form onSubmit={register}>
              <h2 style={{textAlign: 'center'}}>Create your account</h2>
              <label htmlFor='email'>Email: </label>
              <input className='formInput' type="email" name='email' onChange={(event) => setEmail(event.target.value)} ></input>
              <label htmlFor='email'>Password: </label>
              <input className='formInput' type="password" name='password' onChange={(event) => setPassword(event.target.value)} ></input>
              <input className='button' type='submit' value='register' />
              {registerError && <span>You could not be registered, try again! (╥_╥)</span>}
            </form>
          </FormWrapper>
       </Col>
      </Row>
    </Container>
  )
}
export default withRouter(Register);
