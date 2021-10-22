import React from "react";
import "./login.scss";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
 
  useState,
} from "react";

import PropTypes from 'prop-types';




async function loginUser(credentials) {
  return fetch('https://api.bybits.co.uk/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'environment': 'mock',
      "type":"USER_PASSWORD_AUTH",
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // let history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({username,password });
    
    setToken(token);
   
  }
  

  return (
    <div className="login">
      <div className="left">


        <h1>Sign In </h1>
        <form onSubmit={handleSubmit}>
        <label>Username :</label>
          <input
            type="text"
            placeholder="Username"
            autoComplete="username"
            onChange={e => setUsername(e.target.value)}
            name="email"
          />

          <label>Password :</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            name="password"
          />
      <Stack spacing={1} direction="row">
        <Button variant="contained" type="submit ">Login</Button>
      </Stack>    
        </form>
      </div>

      <div className="right"> 
        <div className="glassDiv">
          <h1>Welcome Back !</h1>


        </div>
          
      </div>
     
      <i class="fab fa-facebook"></i>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
