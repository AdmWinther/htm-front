// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/P01_Home';
import Login from './pages/P02_Login';
import ContactInfo from './pages/P03_Contact';
import Dashboard from './pages/P04_Dashboard';
import Test from './components/Test';




function App() {
  return (
    <div style={{ height: '100vh' }}>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;