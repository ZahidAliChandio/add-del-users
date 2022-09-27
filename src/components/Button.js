import React from 'react'
// import classes from './Button.module.css';
import './Button.css'

const Button = (props) => {
  return (
    <React.Fragment>
      <button type={props.type || 'submit'}
        onClick={props.onClick}
        disabled={props.disabled}>
        {props.children}
      </button>
    </React.Fragment>
  )
}
export default Button;