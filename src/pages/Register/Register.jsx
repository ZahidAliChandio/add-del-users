import React, { useContext, useState } from 'react'
import Button from '../../components/UI/Button';
import Input from "../../components/UI/Input";
import userContext from '../../store/users-context';
import classes from './Register.module.css'


const Register = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');


    const usersContext = useContext(userContext);

    const onFNameChange = (event) => {
        setFName(event.target.value);
    }
    const onLNameChange = (event) => {
        setLName(event.target.value);
    }
    const onDesignationChange = (event) => {
        setDesignation(event.target.value);
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        usersContext.onRegister(fName, lName, designation, email);
        setFName('');setLName('');setDesignation('');setEmail('');
    }
    return (
        <form id={classes.registerForm} onSubmit={submitHandler}>
            <h2 className={classes.regiterDropdown}>Register Yourself  AS
                {/* <div className={classes.dropdownContent}>
                    <li>Employee</li>
                    <li>Manager</li>
                </div> */}
            </h2>
            <div className={classes.inputContainer}>
                <Input value={fName}
                    onChange={onFNameChange}
                    placeholder='First Name' />
            </div>
            <div className={classes.inputContainer}>
                <Input value={lName}
                    onChange={onLNameChange}
                    placeholder='Last Name' />
            </div>
            <div className={classes.inputContainer}>
                <Input value={designation}
                    onChange={onDesignationChange}
                    placeholder='Designation' />
            </div>
            <div className={classes.inputContainer}>
                <Input value={email}
                    onChange={onEmailChange}
                    placeholder='Email' />
            </div>
            <Button>Register</Button>
        </form>
    )
}

export default Register
