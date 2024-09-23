// Desc: Dashboard page for the user to navigate to different sections of the application
//this component makes a page with the following forma
// 1. Navigation bar at the top
// 2. A main section that will be filled with the content of the selected option
// ----------------
//| Navigation Bar |
//|----------------|
//|                |
//|      Outlet    |
//|                |
//------------------


import React, {useState, useEffect} from 'react';
import getUserType from '../services/getUserType';
import NavigationBar from '../components/C003_NavigationBar';
import { Outlet } from 'react-router-dom';
import Double from '../classes/Double';

const Dashboard = () => {

    const [options, setOptions] = useState([]);
    // if(process.env.REACT_APP_Verbose)console.log(process.env.REACT_APP_Verbose);

    useEffect(() => {

        getUserType()
        .then(data => {
            if (String(data).toLowerCase() === 'admin') {
                setOptions([new Double('MyUsers','AdminUsers'), new Double('MyOrganizations', 'Organizations'), new Double('MyProjects', 'projects')]);
            } else {
                setOptions([new Double('Users','Users'), new Double('Projects','Projects'), new Double('Account', 'Account')]);
            }
        })
    }, []);

    return (
        // <div className='h-100 flex-fill flex-column'>
        <div className='h-100 d-flex flex-column flex-shring-0'>
            <div className='row p-0 m-0'>
                <NavigationBar options={options}/>
            </div>
            <div className='row flex-fill p-0 m-0 '>
                <Outlet/>
            </div>
        </div>
    )
};


export default Dashboard;