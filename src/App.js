import './App.css';
import Login from './components/Login';
import Reset from './components/Reset';
import Register from './components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App w3-theme-l4">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
