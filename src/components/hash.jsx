import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import QRCode from './qrcode'


export default function Hash(props) {
  return (
    <div>
      <Card bg="dark">

        <Card.Body>
          <Container>

            <Col md={8}>
              <Row>
                <label>
                  Certificate Id <br />
                  {props.hashData.txnHash}
                </label>
              </Row>
            </Col>

            <Col md={12}>
              <Row>
                <label>
                  Issued On: <br />
                  {props.hashData.issuedOn}
                </label>{' '}
                <QRCode data={props.hashData}></QRCode>
              </Row>
            </Col>

          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}