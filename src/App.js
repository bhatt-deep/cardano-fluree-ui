import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import Menu from './components/menu'
import Image from './components/image'
import NFTForm from './components/form'

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
        <Col>
          <Image />
        </Col>

        <Col>
          <NFTForm />
        </Col>
        
      </Row>
    </div>
  )
}

export default App
