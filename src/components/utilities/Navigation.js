import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

function Navigation(props) {
  return (
    <div className='navigation w3-container w3-padding w3-theme-d4'>
        <img
          className='w3-theme-l3 w3-round-xxlarge'
          src="https://cdn-icons-png.flaticon.com/128/166/166248.png"
          alt="Logo"
        />
        <h4>{props.username}</h4>

        <ul className="navul ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/reset">Reset</Link></li>
        </ul>
      
    </div>
  )
}

export default Navigation
