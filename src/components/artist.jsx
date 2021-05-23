import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Artist(props) {

  return (
    <div>
      <Card bg="dark">
        <Card.Body>
          <table>
            <tr>

              <label>
                <td>
                  <b>{props.artistData.artist}</b>
                </td>
              </label>
            </tr>

            <tr>
              <label>
                <td>"{props.artistData.artist_field}"</td>
              </label>

            </tr>

            <br></br>
            <br></br>

            <tr>

              <label>
                <td>"{props.artistData.artist_description}"</td>
              </label>

            </tr>
          </table>
        </Card.Body>
      </Card>
    </div>
  )
}