import React from 'react'
import Card from 'react-bootstrap/Card'

export default function DigitalCertificate(props) {
  return (
    <div>
      <br></br>
      <h2>Digital Certificate of Authenticity</h2>

      <Card bg="dark">
        <Card.Body>
          <table>
            <tr>
              <label>
                <td>
                  <b>"{props.testArtData.name}"</b>
                </td>
              </label>
            </tr>

            <br></br>
           
            <tr>
              <label>
                <td>
                  <p>Materials : </p>
                </td>

                <td>
                  <p> {props.testArtData.materials}</p>
                </td>
              </label>
            </tr>

            

            <tr>
              <label>
                <td>Dimentions:</td>
                <td> {props.testArtData.dimensions}</td>
              </label>
            </tr>

            <br></br>

            <tr>
              <label>
                <td>Weight:</td>
                <td> {props.testArtData.weight}</td>
              </label>
            </tr>

            <br></br>

            <tr>
              <label>
                <td>Story Behind Art:</td>
                <td> {props.testArtData.story}</td>
              </label>
            </tr>

            <br></br>

            <tr>
              <label>
                <td>Cultural Significance:</td>
                <td> {props.testArtData.significance}</td>
              </label>
            </tr>

            <br></br>

            <tr>
              <label>
                <td>Availability:</td>
                <td> {props.testArtData.availability}</td>
              </label>
            </tr>

            <br></br>

            <tr>
              <label>
                <td>Date Created:</td>
                <td> {props.testArtData.date}</td>
              </label>
            </tr>
          </table>
        </Card.Body>
      </Card>
    </div>
  )
}