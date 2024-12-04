function getCsrfToken() {
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_CSRF, { method: 'GET', credentials: 'include', mode: 'cors'})
        // .then(response => {
            // const headersObj = {};
            // response.headers.forEach((value, name) => {
            //     headersObj[name] = value;
            // });
            // return headersObj;
        // })
        .then(response => response.json())
        .then(data => {
            console.log('The CSRF token catck done.');
            let token = data['csrf_token'];
            console.log(data)
            resolve(token);
        })
        .catch(error => {
            // If an error occurs during the operation, reject the promise
            reject(error);
        });
    });
}

export default getCsrfToken;