import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation w3-container w3-padding w3-blue'>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3771/3771278.png"
          alt="Logo"
        />

        <ul className="navul ">
            <li className="">Home</li>
            <li className="">Topics</li>
            <li className="">Tutorials</li>
            <li className="">About</li>
            <li className="">Contact</li>


        </ul>
      
    </div>
  )
}

export default Navigation
