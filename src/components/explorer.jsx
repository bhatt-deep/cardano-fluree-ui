import React from 'react'
import {useParams } from 'react-router';
import {Redirect} from 'react-router-dom'

export default function Explorer() {
    const { hash } = useParams();

    return (
        <Redirect to={{pathname : "../certificate", state : {hash : hash}}}/>
    )
}