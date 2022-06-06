import React from 'react'
import './Dashboard.css'
import Maindash from './Maindash';
import Navigation from './utilities/Navigation';

const Dashboard = ({username}) => {

  return (
    <div className='dashboard'>
      <Navigation username={username}/>
      <Maindash />
    </div>
  )
}

export default Dashboard;
