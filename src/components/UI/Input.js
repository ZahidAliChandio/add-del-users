import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
    return (
        <input type={props.type || "text"} className={`${classes.input} ${props.className}`}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder} />
    )
}

export default Input
