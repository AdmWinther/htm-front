import getCsrfToken from './getCsrfToken';

function PostRequestMaker(url, data) {
    let formData = {};
    const dataKeys = Object.keys(data);
    dataKeys.forEach(key => {
        formData[key] = data[key];
    });
    return new Promise((resolve, reject) => {
        getCsrfToken()
        .then(token => fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'X-XSRF-TOKEN': token // Include the CSRF token in the header
            },
            credentials: 'include', // Ensure cookies are sent with the request
            body: JSON.stringify(formData)
        }))
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })
    });
}

export default PostRequestMaker;