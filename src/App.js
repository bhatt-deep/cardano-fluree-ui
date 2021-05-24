import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Menu from './components/menu'
import NFTForm from './components/form'
import Table from './components/txnhash'
import Explorer from './components/explorer'

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
        <Route path='/hash' exact component={Table}/>
      </Switch>
      <Switch>
        <Route path='/certificate' exact component={Certificate}/>
      </Switch>

      <Switch>
        <Route exact path="/explore/:hash" component={Explorer}/>
      </Switch>
      
    </Router>
  )
}

export default App
