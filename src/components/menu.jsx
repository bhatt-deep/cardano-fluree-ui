import React from 'react';
import {Navbar} from 'react-bootstrap';

export default function menu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Cardano NFT Marketplace</Navbar.Brand>                
            </Navbar>
        </div>
    )
}