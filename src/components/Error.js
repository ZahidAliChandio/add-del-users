import React from 'react'
import Button from './Button'
import './Error.css'

const Error = (props) => {
    return (
        <div id='error-container' onClick={props.onConfirm}>
            <head>
                <h3>{props.title}</h3>
            </head>
            <p><h2>{props.message}</h2></p>
            <footer>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
    )
}

export default Error
