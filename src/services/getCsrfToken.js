function getCsrfToken() {
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_BACKEND_URL+'/login', { method: 'GET', credentials: 'include', mode: 'cors'})
        .then(response => {
            const headersObj = {};
            response.headers.forEach((value, name) => {
                headersObj[name] = value;
            });
            return headersObj;
        })
        .then(data => {
            console.log('I am here.');
            let token = data['x-xsrf-token'];
            resolve(token);
        })
        .catch(error => {
        // If an error occurs during the operation, reject the promise
        reject(error);
        });
    });
}

export default getCsrfToken;