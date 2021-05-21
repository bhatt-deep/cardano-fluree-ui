import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import data from '../data/data.json'
import QRCode from './qrcode'

function Hash()  {
    return (
        <div>

{/* <Card bg="dark">
        <Card.Body>
          <table>
          <Col>
          <tr>
              {data.map((postDetail, index) => {
                return (
                  <label>
                    Certificate Id <br/>
                        {postDetail.txhHash}
                  </label>
                )
              })}
            
              {data.map((postDetail) => {
                return (
                  <label>
                     Issued On: <br/>
                    
                     {postDetail.issuedon}
                        
                  </label>
                )
              })}
            </tr>
          
          </Col>

          <Col>
              
          <QRCode></QRCode>
          </Col>
            

          </table>

        </Card.Body>
      </Card> */}

<Card bg="dark">
        <Card.Body>

          <Container>

          <Col md={8}>
            <Row>
            {data.map((postDetail, index) => {
                return (
                  <label>
                    Certificate Id <br/>
                        {postDetail.txhHash}
                  </label>
                )
              })}
            </Row>
          </Col>

              <br></br>
              <br></br>
              <br></br>

          <Col md={12}>
            <Row>
              
            {data.map((postDetail) => {
                return (
                  <label>
                     Issued On: <br/>
                    
                     {postDetail.issuedon}
                        
                  </label>
                )
              })}

                {' '}
                {' '}
                {' '}

               <QRCode></QRCode>

            </Row>
          
          </Col>

          </Container>

        </Card.Body>
      </Card>



    </div>
  )
}
export default Hash 