import React from 'react'
import './Dashboard.css'
import Maindash from './Maindash';
import Navigation from './utilities/Navigation';

const Dashboard = (props) => {

  return (
    <div className='dashboard'>
      <Navigation username={props.username}/>
      <Maindash />
    </div>
  )
}

export default Dashboard;
