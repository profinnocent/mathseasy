import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Reset from './components/Reset';
import Register from './components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';



function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")


  const handleLogin = (e) => {
    e.preventDefault();
    // alert('Login button clciked' + username);

    if(username === ""){
      alert('Please enter user details');
    }else{
      alert('Welcome, you have successfully loggd in')
      window.location = window.location.href + "/dashboard";
    }
  }

  const getUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    // alert(username);
  }

  const getPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    // alert(password);
  }

  return (
    <div className="App w3-theme-l4">
      <Router>
        <Routes>
          <Route path="/" element={<Login username={username} password={password} getUsername={e => getUsername(e)} getPassword={getPassword} handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard username={username}/>} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
