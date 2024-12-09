// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/P01_Home';
import Login from './pages/P02_Login';
import ContactInfo from './pages/P03_Contact';
import LogoutForm from './pages/P06_LogoutConfirm';
import Dashboard from './pages/P04_Dashboard';
import Welcome from './components/C017_Welcome';
import Settings from './components/C018_Settings';
import Test from './components/C001_Test';

import MyUsersPanel from './components/C002_MyUsersPanel';
import NewUser from './components/C004_NewUser';
import AllUsers from './components/C007_AllUsers';

import MyOrganizationsPanel from './components/C002_MyOrganizationsPanel';
import NewOrganization from './components/C009_NewOrganization';
import AllOrganization from './components/C011_AllOrganization';

import ProjectPanel from './components/C019-ProjectPanel';
import NewProject from './components/C021_NewProject';
import TestFormMaker from './components/TestFormMaker';

import Error401Page from './pages/P05_Error401Page';
import Error404Page from './pages/P05_Error404Page';



function App() {
    return (
        <div style={{ height: '100vh' }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<ContactInfo />} />
                    <Route path="login" element={<Login />} />
                    <Route path="test" element={<Test />} />
                    <Route path="Dashboard" element={<Dashboard />}>
                        <Route index element={<Welcome/>} />

                        <Route path="Organizations" element={<MyOrganizationsPanel />}>
                            <Route index element={<NewOrganization/>} />
                            <Route path="NewOrganization" element={<NewOrganization/>} />
                            <Route path="AllOrganizations" element={<AllOrganization/>} />
                            <Route path="*" element={<Error404Page />} />
                        </Route>

                        <Route path="Users" element={<MyUsersPanel/>}>
                            <Route index element={<AllUsers/>} />
                            <Route path="NewUser" element={<NewUser/>} />
                            <Route path="AllUsers" element={<AllUsers />} />
                            <Route path="*" element={<Error404Page />} />
                        </Route>
                        
                        <Route path="Projects" element={<ProjectPanel/>}>
                            <Route index element={<h1>AllProjects</h1>} />
                            <Route path="NewProject" element={<NewProject/>} />
                            <Route path="AllProjects" element={<h1>Here is All PRojects.</h1>}/>
                            <Route path="*" element={<Error404Page />} />
                        </Route>
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Settings" element={<Settings/>} />
                    </Route>
                    <Route path="*" element={<Error404Page />} />
                    <Route path = "error401" element= {<Error401Page/>}/>
                    <Route path = "error404" element= {<Error404Page/>}/>
                    <Route path="/confirmLogout" element={<LogoutForm />} />
                    
                    <Route path="*" element={<Error404Page />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;