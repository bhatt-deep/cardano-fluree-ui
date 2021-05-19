import React from 'react';
import Image from 'react-bootstrap/Image';


const image = () => {
    return (
        <div>
            <br></br>
            
            <Image src="./img/sart.jpg" fluid style={{
                border:"none",
                marginLeft:"5%", 
                height:'80%',
                marginTop : "5%"
                }} 
            />
        </div>
    )
}

export default image