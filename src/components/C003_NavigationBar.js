import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import postRequestMaker from '../services/postRequestMaker';
import MakeItReadable from '../services/MakeItReadable';


const NavigationBar = ({options}) => {
    
    const LogoutClickHandler = async () => {
        try {
          // Send a post request to logout
          await postRequestMaker(process.env.REACT_APP_BACKEND_URL+'/logout', {});
          window.location.href = '/';
        } catch (error) {
          console.error('Error during logout:', error);
        }
    }; 

    let tabs = options.map(tabTitle => {
        return (
            <li className="nav-item" key={tabTitle.url}>
                <Link to={tabTitle.url} className="nav-link active">
                    {MakeItReadable(tabTitle.url)}
                </Link>
            </li>
        )
    })

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    {tabs}     
                </ul>
                <div className="d-flex">
                    <button className="btn btn-outline-success" onClick={LogoutClickHandler}>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;




// <Link to={"/"+element}>{element}</Link>