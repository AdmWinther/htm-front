import GetRequestMaker from "./GetRequestMaker";

function getCsrfToken() {
    return new Promise((resolve, reject) => {
        const url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_CSRF
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => {
            let token = data['csrf_token'];
            resolve(token);
        })
        .catch(error => {
            // If an error occurs during the operation, reject the promise
            reject(error);
        });
    })
}

export default getCsrfToken;