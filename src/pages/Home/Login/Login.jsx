import React, { useContext, useEffect, useReducer, useState } from 'react'
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input'
import classes from './Login.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import userContext from '../../../store/users-context';
function Login() {
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
    const usersCtx=useContext(userContext);
    
    const navigate = useNavigate();
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
    const submitHandler = (event) => {
        event.preventDefault();
        if(email.isValid && password.isValid){
            usersCtx.users.forEach((user)=>{
                email.value.includes(user.email)?navigate('users'):console.log('User is not Registered');
            })             
        }  
    }
    return (
        <div id={classes.userFormContainer}>
            <h1 className={classes.heading}>Login</h1>
            <form id={classes.userForm} onSubmit={submitHandler} method='post' action='destroy'>
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
                <div className={classes.resetContainer}>
                    <a href="/" className={classes.resetPassword}>Forgot your password?</a>
                    <Button >Login</Button>
                </div>
                <div className={classes.hrContainer}>
                    <span className='hr'></span> <span className='color-grey'> or</span> <span className="hr"></span>
                </div>
                <Link className={classes.newUser} to="register" >New User</Link>
            </form>
        </div>
    )
}

export default Login
