import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import QRCode from './qrcode'

function Hash(props)  {
  //console.log(props.hashData)
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
            
                  <label>
                    Certificate Id <br/>
                        {props.hashData.cid}
                  </label>
                
            </Row>
          </Col>

              

          <Col md={12}>
            <Row>
              
            
                  <label>
                     Issued On: <br/>
                    
                     {props.hashData.date}
                        
                  </label>
               

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