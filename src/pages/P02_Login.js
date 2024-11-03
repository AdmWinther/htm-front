import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import loginPostRequestMaker from '../services/loginPostRequestMaker';
import getUserType from '../services/getUserType';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [children, setChildren] = useState(null);

    const handleLogin = () => {
        loginPostRequestMaker(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_LOGIN, {username: username, password: password})
        .then(response => {
            if(response.status === 401) {
                setChildren(
                    <div>
                        <p style={{color: "red"}}>"Bad Credentials"</p>
                    </div>
                );
            } else if(response.status === 200) {
                console.log("Login successful");
                response.json().then(data => {
                    localStorage.setItem('token', data.value);
                    // console.log("localStorage in login");
                    // console.log(localStorage);
                    // console.log("localStorage in login-E");
                    getUserType()
                    .then(data => {
                        if (String(data).toLowerCase() === 'admin') {
                            window.location.href = '/AdminDashboard';
                        } else if(String(data).toLowerCase() === 'user'){
                            window.location.href = '/UserDashboard';
                        }
                    })
                });
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