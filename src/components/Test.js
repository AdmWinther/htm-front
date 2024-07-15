import React from 'react';
import getCsrfToken from '../services/csrfTokenService';
function Test() {

    //make a state to store the version
    let [version, setVersion] = React.useState('init');

    //function for the get Button
    const fetchDataGet = () => {
        let url = 'http://localhost:8080/version';
        fetch(url)
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
            
            let url = 'http://localhost:8080/version';
            fetch(url , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': csrfToken // Include the CSRF token in the header
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
            <button onClick={fetchDataGet}> Click-Get </button>
            <br></br>
            <button onClick={fetchDataPost}> Click-Post </button>
            <h1>{version}</h1>
        </div>
    );
}

export default Test;




