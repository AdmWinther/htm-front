import getCsrfToken from './getCsrfToken';

function loginPostRequestMaker(url, data) {
    const formData = new URLSearchParams();
    formData.append('username', data.username);
    formData.append('password', data.password);
    return new Promise((resolve, reject) => {
        // getCsrfToken()
        let token = "AlakiCSRFToken";
        // .then(token => fetch(url, {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                // 'X-XSRF-TOKEN': token // Include the CSRF token in the header
            },
            credentials: 'include', // Ensure cookies are sent with the request
            body: formData
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

export default loginPostRequestMaker;