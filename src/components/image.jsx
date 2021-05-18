import React from 'react'
import Image from 'react-bootstrap/Image'

const image = () => {
  return (
    <div>
      <Image
        src="https://ipfs.io/ipfs/bafybeidzbb27oxdaht5eoxcghm6ynb2rtwwshvgkqsktw3trnrzrgvpdnq"
        fluid
        style={{ border: 'none', height: 'auto'}}
      />
    </div>
  )
}

export default image