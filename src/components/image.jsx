import React, {useState} from 'react';
import Image from 'react-bootstrap/Image';


export default function ArtifactImage(props) {
    return (
        <div>
            <br></br>
            
            <Image 
                src = {props.imageData.imageUrl}
                thumbnail
                fluid style={{
                border:"none",
                marginLeft:"1%", 
                height:'80%',
                marginTop : "5%"
                }} 
            />
        </div>
    )
}