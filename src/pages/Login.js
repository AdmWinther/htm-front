import React, { useState } from 'react';
import getCsrfToken  from '../services/csrfTokenService';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        getCsrfToken()
        .then((token) => {
            let data = { username: username, password: password };
            // Perform your login action here (e.g., sending a post request to the backend)
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': token // Include the CSRF token in the header
                },
                credentials: 'include', // Ensure cookies are sent with the request
                body: JSON.stringify(data)
            })
            .then(response => {
                console.log(response);
                return response;
                // Handle response from the backend
            })
            .then(data => {
                // Handle data from the backend
                console.log(data);
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });
        })
    }
    
    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };
    
    return (
        <div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                />
            </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            />
        </div>
        <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;