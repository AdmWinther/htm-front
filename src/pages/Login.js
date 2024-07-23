import React, { useState } from 'react';
// import getCsrfToken  from '../services/getCsrfToken';
import postRequestMaker from '../services/postRequestMaker';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // getCsrfToken()
        // .then((token) => {
        //     const formData = new URLSearchParams();
        //     formData.append('username', username);
        //     formData.append('password', password);
        //     // Perform your login action here (e.g., sending a post request to the backend)
        //     fetch('http://localhost:8080/login', {
        //         method: 'POST',
        //         headers: {
        //             'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             'X-XSRF-TOKEN': token // Include the CSRF token in the header
        //         },
        //         credentials: 'include', // Ensure cookies are sent with the request
        //         body: formData // Send the form data
        //     })
        //     .then(response => {
        //         console.log(response);
        //         return response;
        //         // Handle response from the backend
        //     })
        //     .then(response => {
        //         const headersObj = {};
        //         response.headers.forEach((value, name) => {
        //             headersObj[name] = value;
        //         });
        //         console.log('headersObj');
        //         console.log(headersObj);
                
        //         console.log('response');
        //         console.log(response.url);
        //         window.location.href = response.url;
        //     })
        //     .catch(error => {
        //         // Handle error
        //         console.error('Error:', error);
        //     });
        // })
        postRequestMaker('http://localhost:8080/login', {username: username, password: password})
        .then(response => {
            window.location.href = response.url;
            // Handle response from the backend
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