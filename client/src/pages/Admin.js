// src/pages/AdminPage.js
import React from 'react';
import '../styles/Admin.css';

function AdminPage() {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <button className="admin-button">Add</button>
        <button className="admin-button">Delete</button>
        <button className="admin-button">Edit</button>
      </div>
      <div className="buckets-container">
        <div className="bucket">
          <h3>Listening</h3>
          <p>Student Marks:</p>
          {/* Add student marks or other data here */}
        </div>
        <div className="bucket">
          <h3>Presentation</h3>
          <p>Student Marks:</p>
        </div>
        <div className="bucket">
          <h3>Time Management</h3>
          <p>Student Marks:</p>
        </div>
        <div className="bucket">
          <h3>Leadership</h3>
          <p>Student Marks:</p>
        </div>
        <div className="bucket">
          <h3>Language</h3>
          <p>Student Marks:</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
