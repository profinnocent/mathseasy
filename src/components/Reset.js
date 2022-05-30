import React from 'react';
import './Reset.css';
import {Link} from 'react-router-dom'
import Button from './utilities/Button'
import Input from './utilities/Input';

const Reset = () => {
  return (
    <div className='resetpage w3-container'>
 <form >
        <img src="https://cdn-icons-png.flaticon.com/128/3771/3771278.png" alt="Logo" />
        <h3>MathsEasy</h3>
        <p className='w3-margin-bottom'>Please provide details below to reset your password.</p>
        <Input 
        typez="email" 
        claxx='w3-input w3-round w3-margin-bottom' 
        placeholder="Enter Email"/>
    <Button 
    text="Reset"
    claxx="w3-button w3-theme w3-round-large w3-block w3-margin-bottom"
    />

    <Link to="/" className='w3-block w3-right-align'>&#9756; Back</Link>
    </form>    </div>
  )
}

export default Reset;
