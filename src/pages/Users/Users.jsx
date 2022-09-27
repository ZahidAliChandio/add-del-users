import React from 'react'
import UserList from '../../components/UserList'
import './UserList.css'

const Users = (props) => {
  return (
    <div id='users-outer-container'>
      <div id='users-inner-container'>
        <div className="headings-container">
          <h4 className='heading'>Names</h4>
          <h4 className='heading'>Age</h4>
        </div>
        {
          props.users.map((user, index) => {
            return (
              <div key={index} id='user-item'>
                <div>{user.name}</div>
                <div>{user.age}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Users
