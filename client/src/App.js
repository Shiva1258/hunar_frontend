// src/App.js
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SkillAssessmentPage from './pages/SkillAssessmentPage';
import AdminPage from './pages/Admin';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (password) => {
    if (password === '123') {
      setIsAdmin(true);
      setIsLoggedIn(true);
    } else if (password === '1234567') {
      setIsAdmin(false);
      setIsLoggedIn(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          {/* Logout Button */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          {/* Conditionally Render AdminPage or SkillAssessmentPage */}
          {isAdmin ? <AdminPage /> : <SkillAssessmentPage />}
        </>
      ) : (
        // Login Page
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

