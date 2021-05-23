import React, { useEffect } from 'react'
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
                <td>"{props.artistData.artistField}"</td>
              </label>
            </tr>

            <br></br>
            <br></br>

            <tr>
              <label>
                <td>"{props.artistData.artistDescription}"</td>
              </label>
            </tr>
          </table>
        </Card.Body>
      </Card>
    </div>
  )
}