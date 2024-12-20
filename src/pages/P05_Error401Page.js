// Error401Page.js
import React from 'react';

const Error401Page = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1>Error 401: Unauthorized</h1>
      <p>Sorry, you are not authorized to access this page.</p>
      <p>Your session has ended. Please login again.</p>
      <a href="/login">Login</a> 
      {/* Add additional content or styling as needed */}
    </div>
  );
};

export default Error401Page;