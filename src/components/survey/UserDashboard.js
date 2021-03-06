import React, { useState, useEffect } from 'react'; //in order to consume context need to import useContext from React, don't forget!
import { Container, Col, Row } from 'styled-bootstrap-grid';
import { VictoryPie } from 'victory';

import AuthenticationButtons from '../userAuthentication/authenticationButtons'


const SurveyDashboard = () => {
  const [data, setDataSet] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    const res = await fetch("https://my-json-server.typicode.com/focaldata/demo/db");
    res
      .json()
      .then(res => setDataSet(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return(
    <Container>
      <Row>
        <Col col={12}>
          <AuthenticationButtons />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <div>
            <div>
              { data.length !== 0 && data.surveys.map(({title, questions}, i) => (
                <div key={i}>
                  <div>
                    <h1>{title}</h1>
                      <Row>
                        {questions.map((question, key, j) => (
                          <div style={{width: '50%' }} key={j}>
                            <Col col={6}>
                              <h2>{question.questionTitle}</h2>
                              {/* <div> */}
                                <VictoryPie
                                  colorScale={[
                                    '#cf4475',
                                    '#f79ebd',
                                    '#c3e3e8',
                                    '#b0f08b',
                                    '#6fc969'
                                  ]}
                                  style={{ labels: { fontSize: 20, fill: "white" } }}
                                  data={[
                                    { x: questions[key].answerOptions[0].text, y: questions[key].answerOptions[0].selectedByRespondents },
                                    { x: questions[key].answerOptions[1].text, y: questions[key].answerOptions[1].selectedByRespondents },
                                    { x: questions[key].answerOptions[2].text, y: questions[key].answerOptions[2].selectedByRespondents },
                                    { x: questions[key].answerOptions[3].text, y: questions[key].answerOptions[1].selectedByRespondents },
                                    { x: questions[key].answerOptions[4].text, y: questions[key].answerOptions[2].selectedByRespondents },
                                  ]}
                                />
                              {/* </div> */}
                            </Col>
                            {question.answerOptions.map((answer, k) => (
                              <div key={k}>
                                <p>
                                  <span>{answer.text}</span> was selected by:
                                  <span>{answer.selectedByRespondents}</span> Respondant
                                </p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Row>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default SurveyDashboard;
