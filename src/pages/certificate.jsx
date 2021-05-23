import React, { useState, useEffect } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import Menu from '../components/menu'
import axios from 'axios'

import Image from '../components/image'
import Testart from '../components/testartCertificate'
import Artist from '../components/artist'
import Hash from '../components/hash'

export default function Certificate(props) {
  const hashResult = props.location.state;
  console.log(hashResult)
  const [responseData, setResponseData] = useState('');
  const apiUrl = 'http://localhost:3001/';
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      const artdata= response.data.result;
      setResponseData(artdata)
      console.log(artdata)
     // console.log(responseData)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
        <div class="App">
          <Row>
            <Col>
              <Image />
              <br></br>
              <Hash hashData={responseData} />
            </Col>
            <Col>
              <Testart testArtData={responseData}/>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
    
              <Artist  artistData={responseData} />
            </Col>
            </Row>
        </div>
      )  
}