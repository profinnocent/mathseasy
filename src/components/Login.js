import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Button from '../assests/images/Button'
import './Login.css'

function Login() {
  return (
    <div className='loginpage w3-container'>
      <form >
        <img src="https://cdn-icons-png.flaticon.com/128/3771/3771278.png" alt="Logo" />
        <h3>MathsEasy</h3>
        <p className='w3-margin-bottom'>Please provide details below to login.</p>
        <input type="text" id="usernane" className='w3-input w3-round w3-margin-bottom' placeholder="Enter Username"/>
        <input type="password" id="password" className='w3-input w3-round w3-margin-bottom' placeholder="Enter Password"/>
    <Button 
    text="Login"
    typez="w3-button w3-theme w3-round-large w3-block w3-margin-bottom"
    />

<Button 
    text="Register"
    typez="w3-button w3-theme-d4 w3-round-large w3-block w3-margin-bottom"
    />

    {/* <Link to="/reset" className='w3-block w3-right-align'>Forget password?</Link> */}
    </form>
    </div>
  )
}

export default Login
