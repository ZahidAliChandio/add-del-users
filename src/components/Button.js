import React from 'react'
// import classes from './Button.module.css';
import './Button.css'

export default function Button(props) {
  return (
    <React.Fragment>
        <button type={props.type || 'submit'} onClick={props.onClick}>{props.children}</button>      
    </React.Fragment>
  )
}
