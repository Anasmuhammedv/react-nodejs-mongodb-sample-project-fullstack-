import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

    const [email,setEmail]= useState('')
    const[password,setPassword] =useState('')
    console.log(email);
    console.log(password);
    const navigate=useNavigate()

    async function submit(e){
            e.preventDefault()

            try {
                
                await axios.post("http://localhost:3004/",{
                    email,password
                })
            .then(res=>{
                if(res.data=="exist"){
                    navigate('/home',{state:{id:email}})
                }
                else if (res.data=="not exist"){
                    alert("go and sign up first")
                }

            })
            .catch(e=>{
                console.log(e);
            })    


            } catch (error) {
                console.log(error);
                
            }
    }
    return (
    <div>
        <h1>Login Page</h1>
          <form action="post">
        <input type="text"  onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="">type your email</label>
        
        <br></br><br></br>
        <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
        <label htmlFor="">type password</label>
        <input onClick={submit} type="submit" /> 
            </form> 
            <br /><br />

            <Link to='Signup'>signup page</Link> 
    </div>
  )
}

export default Login