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
        .then(response => {
            if(response.status === 200){
                return response
            } else if(response.status === 401) {
                window.location.href = '/error401';
            } else if(response.status === 403) {
                window.location.href = '/error403';
            }          
            else {
                throw new Error('Failed to get user type');
            }
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