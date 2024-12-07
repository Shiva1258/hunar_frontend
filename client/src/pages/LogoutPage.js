// src/pages/LogoutPage.js
import React from 'react';

function LogoutPage({ onLogout }) {
  return (
    <div className="text-center">
      <h2>Welcome, you are logged in!</h2>
      <button onClick={onLogout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
}

export default LogoutPage;
