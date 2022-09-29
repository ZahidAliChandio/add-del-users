import React, { createContext, useContext } from 'react'
import userContext from '../../store/users-context';
import './UserList.css'

const Users = (props) => {
  const usersCtx = useContext(userContext);
  return (
    <div id='users-outer-container'>
      <div id='users-inner-container'>
        <h2>Employees</h2>
        <table>
          <thead>
            <tr>
              <th className='heading'>First Name</th>
              <th className='heading'>Last Name</th>
              <th className='heading'>Designation</th>
              <th className='heading'>Email</th>
            </tr>
          </thead>
          <tbody>
            {usersCtx.users &&
              usersCtx.users.map((user, index) => {
                return (
                  <tr key={index} id='user-item'>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.designation}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
