import React from 'react';
import Card from 'react-bootstrap/Card'
import data from '../data/data.json'

function NFTForm()  {
    return (
        <div>

            <br></br>
            <h2>Digital Certificate of Authenticity</h2>

<Card bg="dark">
        <Card.Body>
          <table>
            <tr>
              {data.map((postDetail, index) => {
                return (
                  <label>
                    
                    <td>
                        <b>
                        "{postDetail.name}"
                        </b>
                    </td>
                  </label>
                )
              })}
            </tr>

            <br></br>
            <br></br>
            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>
                      <p>Materials :   </p> 
                      </td>
                     
                     <td>
                         <p>   {postDetail.materials}</p>
                        
                    </td>
                  </label>
                )
              })}
            </tr>

            <br></br>
              
            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>Dimentions:</td>
                    <td> {postDetail.dimensions}
                    </td>
                    
                  </label>
                )
              })}
            </tr>

            <br></br>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>Weight:</td>
                    <td> {postDetail.weight}
                    </td>
                    
                  </label>
                )
              })}
            </tr>

            <br></br>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>Story Behind Art:</td>
                    <td> {postDetail.story}
                    </td>
                    
                  </label>
                )
              })}
            </tr>

            <br></br>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>Cultural Significance:</td>
                    <td> {postDetail.significance}
                    </td>
                    
                  </label>
                )
              })}
            </tr>

            <br></br>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>Availability:</td>
                    <td> {postDetail.availability}
                    </td>
                    
                  </label>
                )
              })}
            </tr>

            <br></br>

            <tr>
              {data.map((postDetail) => {
                return (
                  <label>
                      <td>Date Created:</td>
                    <td> {postDetail.date}
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

export default NFTForm 