import React, {useState, useEffect} from 'react';
import getUserType from '../services/getUserType';
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        // setOptions(['MyUsers', 'MyOrganizations', 'MySettings']);
        getUserType()
        .then(data => {
            if (data === 'Admin' || data === 'admin') {
                setOptions(['MyUsers', 'MyOrganizations', 'MySettings']);
            } else {
                setOptions(['Users', 'Projects', 'Account']);
            }
        })
    }, []);

    console.log("options");
    return (
        <div>
            <NavigationBar options={options}/>
            <Outlet/>
        </div>
    )
};


export default Dashboard;