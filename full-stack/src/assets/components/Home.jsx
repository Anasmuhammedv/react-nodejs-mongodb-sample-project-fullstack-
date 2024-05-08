import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
function Home() {
  const  nav=useNavigate()
  const location= useLocation
  return (
    <div>
        <h1>hello e welcome to home page</h1>
        <button></button>
    </div>
  )
}

export default Home