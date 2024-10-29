// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/P01_Home';
import Login from './pages/P02_Login';
import ContactInfo from './pages/P03_Contact';
import Dashboard from './pages/P04_Dashboard';
import Test from './components/C001_Test';
import NotFound from './components/C404_NotFound';
import MyUsersPanel from './components/C002_MyUsersPanel';
import NewUserPanel from './components/C004_NewUserPanel';
import AdminDashboardAllUsers from './components/C007_AdminDashboardAllUsers';

import MyOrganizationsPanel from './components/C002_MyOrganizationsPanel';
import NewOrganization from './components/C009_NewOrganization';
import AllOrganization from './components/C011_AllOrganization';



function App() {
    return (
        <div style={{ height: '100vh' }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<ContactInfo />} />
                    <Route path="login" element={<Login />} />
                    <Route path="test" element={<Test />} />
                    <Route path="AdminDashboard" element={<Dashboard />}>
                        <Route index element={<p>welcome to Admin Dashboard.</p>} />

                        <Route path="Organizations" element={<MyOrganizationsPanel />}>
                            <Route index element={<NewOrganization/>} />
                            <Route path="NewOrganization" element={<NewOrganization/>} />
                            <Route path="AllOrganizations" element={<AllOrganization/>} />
                        </Route>

                        <Route path="Users" element={<MyUsersPanel/>}>
                            <Route index element={<NewUserPanel/>} />
                            <Route path="NewUser" element={<NewUserPanel/>} />
                            <Route path="AllUsers" element={<AdminDashboardAllUsers />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                        
                        <Route path="MyProjects" element={<h1>PROJECTS</h1>}>
                            <Route index element={<h1>My Projects</h1>} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="UserDashboard" element={<Dashboard />}>
                        <Route index element={<p>welcome to User Dashboard.</p>} />
                        <Route path="Users" element={<h1>Users</h1>} />
                        <Route path="Projects" element={<h1>Projects</h1>} />
                        <Route path="Account" element={<h1>Account</h1>} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;