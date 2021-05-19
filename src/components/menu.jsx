import React from 'react';
import {Navbar} from 'react-bootstrap';

const menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Cardano NFT Marketplace</Navbar.Brand>                
            </Navbar>
        </div>
    )
}

export default menu