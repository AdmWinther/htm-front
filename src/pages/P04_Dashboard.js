import React, {useState, useEffect} from 'react';
import getUserType from '../services/getUserType';
import NavigationBar from '../components/NavigationBar';
import DashboardContent from '../components/DashboardContent';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [userType, setuserType] = useState(null);

    useEffect(() => {
        getUserType()
        .then(data => {
            setuserType(data === 'User' ? "User" : "Admin");
        })
    }, []);

    return (
            <div>
                <NavigationBar type={userType}/>
                <Outlet/>
            </div>
    )
};


export default Dashboard;