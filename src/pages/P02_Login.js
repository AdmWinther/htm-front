import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PostRequestMaker from '../services/PostRequestMaker';
import GetUserMainRoleFromLocalStorage from '../services/GetUserMainRoleFromLocalStorage';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [children, setChildren] = useState(null);

    const handleLogin = () => {
        console.log("Login button clicked");
        let url =process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_LOGIN
        let formData = {username: username, password: password}
        PostRequestMaker(url, formData, true)
        .then(response => {
            if(response.status === 401) {
                setChildren(
                    <div>
                        <p style={{color: "red"}}>"Bad Credentials"</p>
                    </div>
                );
            } else if(response.status === 200) {
                console.log("Login successful");
                // a suucessfull login will return the user roles in the body of the response
                response.json()
                .then(data => {
                    localStorage.clear();
                    const parameterName = process.env.REACT_APP_LOCAL_STORAGE_USER_ROLES
                    localStorage.setItem(parameterName, data.parameterName);
                })
                const userMainRole = GetUserMainRoleFromLocalStorage();
                if (userMainRole === "ADMIN") {
                    window.location.href = '/AdminDashboard';
                } else {
                    window.location.href = '/UserDashboard';
                }
                // });
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