import React, { useState } from 'react'; //in order to consume context need to import useContext from React, don't forget!
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import AuthenticationButtons from '../userAuthentication/authenticationButtons'
//the actual data that will be consumed

const StyledContainer= styled.div`
  align-items: center;
  border-radius: 5px;
  background: #6d658f;
  width: 100%;
  padding: 40px;
  text-decoration: none;
  box-shadow: -20px -20px 0px 0px rgba(100,100,100, 0.1);
  `;

const Spacing= styled.div`
  margin: 10px;
  background-color: red;
`;

const Separator = styled.div`
  background-color: #9485d4;
  width: 100%;
  margin-top: 10px;
  height: 1px;
`

const SurveyDashboard = () => {

  return(
    <Container >
      <Row>
        <Col col={6}>
         <AuthenticationButtons />
        <button className='register' >Environement</button>
        <button className='logout'>Brexit</button>
        <button className='logout'>US</button>
        </Col>
      </Row>
    </Container>
  )
}

export default SurveyDashboard;
