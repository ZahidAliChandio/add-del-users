import React from 'react'
import ReactDOM from 'react-dom'
import Button from './UI/Button'
import './Error.css'

const Error = (props) => {
    return (
        <div id='error-container' onClick={props.onConfirm}>
            <header>
                <h3>{props.title}:</h3>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
    )
}
const TopError = (props) => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(
                    <Error
                        title={props.title}
                        message={props.message}
                        onConfirm={props.onConfirm} />,
                    document.getElementById('error-overlay'))
            }
        </React.Fragment>
    )
}

export default TopError
