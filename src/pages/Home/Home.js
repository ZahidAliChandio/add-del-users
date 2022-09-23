import React from 'react'
import { useState } from 'react'
import UserForm from '../../components/UserForm'
import UserList from '../../components/UserList'
import './Home.css'

export default function Home() {
    const [users,setUsers]=useState([])
    const handleOnUserAdd=(userName,userAge)=>{
        setUsers((prevList)=>{
            return[
                ...prevList,{name:userName,age:userAge,id:Math.random().toString()},
            ];
        });
    };

    return (
        <React.Fragment>
            <UserForm onUserAdd={handleOnUserAdd}/>
            <UserList users={users}/>
        </React.Fragment>
    )
}
