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

    const [DashboardTabs, setDashboardTabs] = useState([]);
    // if(process.env.REACT_APP_Verbose)console.log(process.env.REACT_APP_Verbose);
    useEffect(() => {

        getUserType()
        .then(data => {
            if (String(data).toLowerCase() === 'admin') {
                console.log("JWT token: "+document.cookie);
                //Admin dashboard tabs
                setDashboardTabs([new Double('Users','Users'), new Double('Organizations', 'Organizations'), new Double('MyProjects', 'Projects')]);
            } else if (String(data).toLowerCase() === 'user'){
                //User dashboard tabs
                console.log("JWT token: "+document.cookie);
                setDashboardTabs([new Double('Users','Users'), new Double('Projects','Projects'), new Double('Account', 'Account')]);
            }
        })
    }, []);

    return (
        // <div className='h-100 flex-fill flex-column'>
        <div className='h-100 d-flex flex-column flex-shring-0'>
            <div className='row p-0 m-0'>
                <NavigationBar tabProps={DashboardTabs}/>
            </div>
            <div className='row flex-fill p-0 m-0 '>
                <Outlet/>
            </div>
        </div>
    )
};


export default Dashboard;