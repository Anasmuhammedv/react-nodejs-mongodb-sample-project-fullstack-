


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css files/login.css'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3004/", {
                email,
                password
            });

            if (res.data === "exist") {
                navigate('/home', { state: { id: email } });
            } else if (res.data === "not exist") {
                alert("Go and sign up first");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Login Page</h1>
            <form onSubmit={submit}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Type your email</label>
                <br /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="">Type password</label>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            <div className="signup-link">
                <Link to='/signup'>Sign up page</Link>
            </div>
        </div>
    );
}

export default Login;

