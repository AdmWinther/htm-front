import React, {useState, useEffect} from 'react';
import getUserType from '../services/getUserType';
import NavigationBar from '../components/C003_NavigationBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    const [options, setOptions] = useState([]);

    useEffect(() => {

        getUserType()
        .then(data => {
            if (data === 'Admin' || data === 'admin') {
                setOptions(['MyUsers', 'MyOrganizations', 'MySettings']);
            } else {
                setOptions(['Users', 'Projects', 'Account']);
            }
        })
    }, []);

    return (
        // <div className='h-100 flex-fill flex-column'>
        <div className='h-100 d-flex flex-column flex-shring-0'>
            <div className='row p-0 m-0'>
                <NavigationBar options={options}/>
            </div>
            <div className='row flex-fill p-0 m-0'>
                <Outlet/>
            </div>
        </div>
    )
};


export default Dashboard;