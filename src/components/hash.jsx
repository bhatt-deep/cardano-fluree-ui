import React from 'react';
import Card from 'react-bootstrap/Card'
import data from '../data/data.json'

function Hash()  {
    return (
        <div>

<Card bg="dark">
        <Card.Body>
          <table>
            <tr>
              {data.map((postDetail, index) => {
                return (
                  <label>
                    Certificate Id <br/>
                        {postDetail.txhHash}
                  </label>
                )
              })}
            </tr>
            <br></br>
            <br></br>
            <br></br>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                     Issued On: <br/>
                    
                     {postDetail.issuedon}
                        
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
export default Hash 