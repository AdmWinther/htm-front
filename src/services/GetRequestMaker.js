// import getCsrfToken from './getCsrfToken';

function GetRequestMaker(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'origin': process.env.REACT_APP_FRONTEND_URL,
                'Content-Type': 'application/json',
                credentials: 'include', // Ensure that cookies are sent with the request
                // 'Authorization': localStorage.getItem('token'),
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            },
            credentials: 'include', // Ensure cookies are sent with the request
        })
        // )
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })
    });
}

export default GetRequestMaker;