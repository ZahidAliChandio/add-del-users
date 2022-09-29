import React, { createContext, useContext, useEffect, useState } from 'react'

const userContext = React.createContext({
    users: [],
    onRegister: (firstName, lastName, designation, email) => { }
});

export const UsersProvider = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersList = localStorage.getItem('users');
        if (users.length !== 0) {
            setUsers(JSON.parse(usersList));
        }
    }, [users.length])

    const handleRegister = (fName, lName, desg, email) => {
        const newUser = {
            firstName: fName,
            lastName: lName,
            designation: desg,
            email: email
        };
        const usersUpdate = users.concat(newUser);
        localStorage.clear();
        localStorage.setItem('users', JSON.stringify(usersUpdate));
        setUsers(usersUpdate);
    }
    return (
        <userContext.Provider
            value={{
                users: users,
                onRegister: handleRegister
            }}
        >
            {props.children}
        </userContext.Provider>
    );
}

export default userContext;