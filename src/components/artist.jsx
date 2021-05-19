import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import data from '../data/data.json'

function Artist() {
  return (
    <div>
      <Card bg="dark">
        <Card.Body>
          <table>
            <tr>
              {data.map((postDetail, index) => {
                return (
                  <label>
                    
                    <td>
                        <b>
                        {postDetail.artist}
                        </b>
                    </td>
                  </label>
                )
              })}
            </tr>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                     
                     <td>
                     "{postDetail.artist_field}"
                         </td>
                  </label>
                )
              })}
            </tr>

            <br></br>
              <br></br>

            <tr>
              {data.map((postDetail, index) => {
                return (
                  <label>
                    <td>
                    "{postDetail.artist_description}"
                    </td>
                    
                  </label>
                )
              })}
            </tr>
          </table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Artist