import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home is here.</h1>
            <Link to="/contact">Contact Info</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/test">Test</Link>
        </div>
    )
}


export default Home;