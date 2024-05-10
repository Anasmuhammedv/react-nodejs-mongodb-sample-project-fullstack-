import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Home() {
  const  nav=useNavigate()
  const location= useLocation
  const [users,setUsers]=useState([])


  useEffect(()=>{
    axios.get('http://localhost:3004/getUsers')
    .then(users=>setUsers(users.data))
    .catch(err=>console.log(err))
  },[])
  console.log(users);

  return (
    <div>
        <h1>This is home page</h1>

        <table border={10}>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
          {
            users.map(user=>(
              <tr>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          }
        </table>
        
    </div>
  )
}

export default Home