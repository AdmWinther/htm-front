import React from 'react';
import getCsrfToken from '../services/getCsrfToken';
import { Link } from 'react-router-dom';
function Test() {

    //make a state to store the version
    let [version, setVersion] = React.useState('init');

    //function for the get Button
    const fetchDataGet = () => {
        let url = process.env.REACT_APP_BACKEND_URL+
                process.env.REACT_APP_ENDPOINT_VERSION;

        fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.version);
            setVersion(data.version);
        });
    }

    const fetchDataPost =async () => {
        getCsrfToken()
        .then( csrfToken => {
            console.log('fetchDataPost, i have the token.');
            console.log(csrfToken);
            const data = {text:"!hi peachy" };
            
            let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_VERSION;
            fetch(url , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': csrfToken, // Include the CSRF token in the header
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/'
                },
                credentials: 'include', // Ensure cookies are sent with the request
                body: JSON.stringify(data)
            })
            .then(data => {
                console.log('fetchDataPost, i am posting.');
                return data.json();
            })
            .then(responseData => {
                console.log(responseData.version);
                setVersion(responseData.version);
            });
        });
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <br/>
            <button onClick={fetchDataGet}> Click-Get </button>
            <br/>
            <button onClick={fetchDataPost}> Click-Post </button>
            <h1>{version}</h1>
        </div>
    );
}

export default Test;




