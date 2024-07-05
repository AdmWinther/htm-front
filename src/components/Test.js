import React from 'react';
function Test() {

    //make a state to store the version
    let [version, setVersion] = React.useState('init');

    const fetchData = () => {
        let url = 'http://localhost:8080/version';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.version);
            setVersion(data.version);
        });
    }

    const fetchDataPost =async () => {
        const csrfToken = await getCsrfToken();
        const data = {text:"!hi peachy" };


        let url = 'http://127.0.0.1:8080/version';
        const response = await fetch(url , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-XSRF-TOKEN': csrfToken // Include the CSRF token in the header
            },
            credentials: 'include', // Ensure cookies are sent with the request
            body: JSON.stringify(data)
        });
        console.log('fetchDataPost, i am posting.');
        const responseData = await response.json();
        await setVersion(responseData.version);
    }

    return (
        <div>
            <button onClick={fetchData}> Click-Get </button>
            <br></br>
            <button onClick={fetchDataPost}> Click-Post </button>
            <h1>{version}</h1>
        </div>
    );



    // Function to obtain the CSRF token from the server
    async function getCsrfToken() {
        const response = await fetch('http://localhost:8080/root/test', { method: 'GET', credentials: 'include', mode: 'cors'});
        const data = await response.json();
        await console.log(data.csrfToken);
        return data.csrfToken; // Assuming the CSRF token is available in the response data
    }
}

export default Test;




