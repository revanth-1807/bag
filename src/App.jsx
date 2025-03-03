import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NotebookSharing from './components/NotebookSharing';
import NotebookGetting from './components/NotebookGetting';
import Diary from './components/Dairy';
import InteractAI from './components/InteractAI';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="container">
        {isLoggedIn && (
          <nav>
            <Link to="/notebook-sharing">Notebook Sharing</Link>
            <Link to="/notebook-getting">Notebook Getting</Link>
            <Link to="/diary">Diary</Link>
            <Link to="/interact-ai">Interact with AI</Link>
            <button onClick={handleLogout}>Log Out</button>
          </nav>
        )}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn ? (
            <>
              <Route path="/notebook-sharing" element={<NotebookSharing />} />
              <Route path="/notebook-getting" element={<NotebookGetting />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/interact-ai" element={<InteractAI />} />
              <Route path="*" element={<Navigate to="/notebook-sharing" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
