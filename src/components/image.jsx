import React from 'react'
import Image from 'react-bootstrap/Image'

const image = (path) => {
  return (
    <div>
      <Image
        src="https://ipfs.io/ipfs/bafybeidzbb27oxdaht5eoxcghm6ynb2rtwwshvgkqsktw3trnrzrgvpdnq"
        fluid
        style={{
            border:"none",
            marginLeft:"5%", 
            height:'auto',
            marginTop : "5%"
            }} 
      />
    </div>
  )
}

export default image