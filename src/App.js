// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ContactInfo from './pages/Contact';
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
            </Routes>
        </Router>
    </div>
  );
}

export default App;