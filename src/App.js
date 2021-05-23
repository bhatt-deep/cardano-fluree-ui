import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Menu from './components/menu'
import NFTForm from './components/form'

import Certificate from './pages/certificate'




function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Row className="landing">
          <Col>
            {/* <NFTForm /> */}
            <Route path='/' exact component={NFTForm}/>
          </Col>
        </Row>
      </div>
      <Switch>
        <Route path='/certificate' exact component={Certificate}/>
      </Switch>
      
    </Router>

  )
}

export default App
