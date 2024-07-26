import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import postRequestMaker from '../services/postRequestMaker';

const NavigationBar = () => {
    
    const LogoutClickHandler = async () => {
        try {
          // Send a post request to logout
          await postRequestMaker(process.env.REACT_APP_BACKEND_URL+'/logout', {});
          window.location.href = '/';
        } catch (error) {
          console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="node.com">Active</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="Maria.com" 
                            role="button" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="google.com">Action</a></li>
                        <li><a className="dropdown-item" href="yahoo.com">Another action</a></li>
                        <li><a className="dropdown-item" href="hotmail.com">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="amazon.com">Separated link</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="green.com">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="google.com" 
                            tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <button className="btn btn-outline-success" onClick={LogoutClickHandler}>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;