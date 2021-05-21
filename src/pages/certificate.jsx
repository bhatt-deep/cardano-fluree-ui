import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import Menu from '../components/menu'

import Image from '../components/image'
import Testart from '../components/testartCertificate'
import Artist from '../components/artist'
import Hash from '../components/hash'

export default function Certificate() {

    return (
        <div class="App">
          <Menu />
          <Row>
            <Col>
              <Image />
              <br></br>
              <Hash />
            </Col>
            <Col>
              <Testart />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
    
              <Artist />
            </Col>
            </Row>
        </div>
      )  
}