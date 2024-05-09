import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Signup() {
    const [email,setEmail]= useState('')
    const[password,setPassword] =useState('')
    console.log(email);
    console.log(password);
    const navigate=useNavigate()

    async function submit(e){
            e.preventDefault()

            try {
                
                await axios.post("http://localhost:3004/signup",{
                    email,password
                })

                .then(res=>{
                    if(res.data=="exist"){
                        alert("user already exist")
                    }
                    else if (res.data=="not exist"){
                        navigate('/')
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
        <h1>Sign Up PAGE</h1>
          <form action="post">
        <input type="text"  onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="">type your email</label>
        
        <br></br><br></br>
        <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
        <label htmlFor="">type password</label>
        <button onClick={submit}>submit</button> 
            </form>  
            <br /><br />
            <Link to='/'>login page</Link>
    </div>
  )
}


export default Signup