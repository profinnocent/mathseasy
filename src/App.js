import './App.css';
import Login from './components/Login';
import Reset from './components/Reset';
import Register from './components/Register';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App w3-theme-l4">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
