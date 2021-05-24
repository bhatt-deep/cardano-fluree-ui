import React, { useState, useEffect } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'

import ArtifactImage from '../components/image'
import DigitalCertificate from '../components/testartCertificate'
import Artist from '../components/artist'
import Hash from '../components/hash'

export default function Certificate(props) {


  const responseData = props.location.state;
  //console.log(responseData)

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