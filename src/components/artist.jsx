import React from 'react'
import Card from 'react-bootstrap/Card'

function Artist(props) {
  //console.log(props.artistData)
  return (
    <div>
      <Card bg="dark">
        <Card.Body>
          <table>
            <tr>


              <label>

                <td>
                  <b>
                    {props.artistData.artist}
                  </b>
                </td>
              </label>


            </tr>

            <tr>

              <label>

                <td>
                  "{props.artistData.artist_field}"
                         </td>
              </label>

            </tr>

            <br></br>
            <br></br>

            <tr>

              <label>
                <td>
                  "{props.artistData.artist_Description}"
                    </td>

              </label>

            </tr>
          </table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Artist