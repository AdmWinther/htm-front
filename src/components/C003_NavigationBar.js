import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import loginPostRequestMaker from '../services/loginPostRequestMaker';
import MakeItReadable from '../services/MakeItReadable';


const NavigationBar = ({tabProps}) => {
    
    const LogoutClickHandler = async () => {
        try {
            // Send a post request to logout
            await loginPostRequestMaker(process.env.REACT_APP_BACKEND_URL+'/logout', {});
            window.location.href = '/';
            // delete httponly cookies from the browser history
            document.cookie = "";
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }; 

    let tabs = tabProps.map(tabProp => {
        return (
            <li className="nav-item" key={tabProp.url}>
                <Link to={tabProp.url} className="nav-link active">
                    {MakeItReadable(tabProp.display)}
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