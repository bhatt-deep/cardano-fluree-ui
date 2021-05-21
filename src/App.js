import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import Menu from './components/menu'
import NFTForm from './components/form'
import QRCode from './components/qrcode'

import Image from './components/image'
import Testart from './components/testartCertificate'
import Artist from './components/artist'
import Hash from './components/hash'

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
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

        {/* <Col>
          <NFTForm />
        </Col>
      </Row>
      <Row><QRCode /></Row> */}
    </div>
  )
}

export default App
