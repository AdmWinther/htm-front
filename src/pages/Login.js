import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import postRequestMaker from '../services/postRequestMaker';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [children, setChildren] = useState(null);

    const handleLogin = () => {
        postRequestMaker('http://localhost:8080/login', {username: username, password: password})
        .then(response => {
            if(response.status === 401) {
                setChildren(
                    <div>
                        

                        <p style={{color: "red"}}>"Bad Credentials"</p>


                    </div>

                );
            } else if(response.status === 200) {
                window.location.href = response.url;
            } else {
                setChildren(
                    <p style={{color: "red"}}>"Server Error"</p>
                );
            }
            // Handle response from the backend
        })
    }
    
    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };
    
    return (
        <div className="h-100 d-flex justify-content-center align-items-center" >
            <div className="h-auto">
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input className="form-control"
                    // type="text"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={handleKeyPress}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-control"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    />
                </div>
                {children}
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
  );
};

export default LoginForm;