// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/P01_Home';
import Login from './pages/P02_Login';
import ContactInfo from './pages/P03_Contact';
import Dashboard from './pages/P04_Dashboard';
import Test from './components/Test';
import MyUsersPanel from './components/MyUsersPanel';
import NewUserPanel from './components/NewUserPanel';




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
                        <Route index element={<p>welcome.</p>} />
                        <Route path="Users" element={<h1>Users</h1>} />
                        <Route path="Projects" element={<h1>Projects</h1>} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="MyOrganizations" element={<h1>ORGANIZATIONS</h1>} />
                        <Route path="MyUsers" element={<MyUsersPanel/>}>
                            <Route index element={<NewUserPanel/>} />
                            <Route path="NewUser" element={<NewUserPanel/>} />
                            <Route path="AllMyUsers" element={<h1>All Users</h1>} />
                            <Route path="FindUser" element={<h1>Find User.</h1>} />
                        </Route>
                        <Route path="MyProjects" element={<h1>PROJECTS</h1>} />
                        <Route path="*" element={<p>Under Construction.</p>} />
                    </Route>
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Router>
        
    </div>
  );
}

export default App;