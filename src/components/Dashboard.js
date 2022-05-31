import React from 'react'
import './Dashboard.css'
import Maindash from './Maindash';
import Navigation from './utilities/Navigation';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navigation />
      <Maindash />
    </div>
  )
}

export default Dashboard;
