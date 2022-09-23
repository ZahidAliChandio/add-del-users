import React from 'react'
import { useState } from 'react';
import Button from './Button'
import Error from './Error';
const UserForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);
    const addUserHandler = (event) => {
        event.preventDefault();
        if (name.trim().length < 1) {
            setError({
                title: 'Name',
                message: 'Name field can not be empty'
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Age',
                message: 'Age field can not be empty'
            })
            return;
        }
        props.onUserAdd(name, age);
        setName('');
        setAge('');

    }
    const handleErrorClick = () => {
        setError(null);
    }
    return (
        <React.Fragment>
            <div id="form-container">
                <form action="post" id='user-form' onSubmit={addUserHandler}>
                    <input type={'text'} name={'name'} id={'name-input'} placeholder={'Enter your name'}
                        onChange={e => { e.preventDefault(); setName(e.target.value) }}
                        value={name} />
                    <input type={'text'} name={'age'} id='age-input' placeholder={'Enter your age'}
                        onChange={e => { e.preventDefault(); setAge(e.target.value) }}
                        value={age} />
                    <Button type={'submit'}>ADD USER</Button>
                </form>
            </div>
            {error && <Error
                title={error.title}
                message={error.message}
                onConfirm={handleErrorClick} />}
        </React.Fragment>
    )
}

export default UserForm
