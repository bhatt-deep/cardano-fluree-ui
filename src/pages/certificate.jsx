import React, { useState, useEffect } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import ArtifactImage from '../components/image'
import DigitalCertificate from '../components/testartCertificate'
import Artist from '../components/artist'
import Hash from '../components/hash'

export default function Certificate(props) {


  const [responseData, setResponseData] = useState('');

  const hash = props.location.state.hash;
  const apiUrl = `http://localhost:3001/${hash}`;

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      const tokenData = response.data.result;
      setResponseData(tokenData)

    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
        <div class="App">
          <Row>
            <Col>
              <ArtifactImage imageData = {responseData}/>
              <br></br>
              <Hash hashData={responseData} />
            </Col>
            <Col>

              <DigitalCertificate testArtData={responseData}/>
              <Artist artistData={responseData} />

            </Col>
            </Row>
        </div>
      )  
}