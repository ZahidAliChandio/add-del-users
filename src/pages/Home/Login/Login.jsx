import React, { useEffect, useReducer, useState } from 'react'
import Button from '../../../components/Button';
import Input from '../../../components/Input'
import classes from './Login.module.css'

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const emailReducer = (state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.includes('@') }
        }
        if (action.type === 'INPUT_BLUR') {
            return { value: state.value, isValid: state.value.includes('@') }
        }
        return { value: '', isValid: false }
    };
    const passwordReducer = (state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.trim().length > 6 }
        }
        if (action.type === 'INPUT_BLUR') {
            return { value: state.value, isValid: state.value.trim().length > 6 }
        }
        return { value: '', isValid: false }
    };
    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });
    const [password, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const onEmailChange = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
    };
    const validateEmail = () => {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }
    const onPasswordChange = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
    };
    const validatePassword = () => {
        dispatchPassword({ type: 'INPUT_BLUR' })
    }
    useEffect = (() => {

    })
    return (
        <div id={classes.userFormContainer}>
            <form id={classes.userForm}>
                <div className={`${classes.control} ${email.isValid === false ? classes.invalid : classes.control}`}>
                    <Input value={email.value}
                        onChange={onEmailChange}
                        onBlur={validateEmail}
                        placeholder='Email' />
                </div>
                <div className={`${classes.control} ${password.isValid === false ? classes.invalid : classes.control}`}>
                    <Input type='password'
                        value={password.value}
                        onChange={onPasswordChange}
                        onBlur={validatePassword}
                        placeholder='password' />
                </div>
                <Button disabled={true}>Login</Button>
            </form>
        </div>
    )
}

export default Login
