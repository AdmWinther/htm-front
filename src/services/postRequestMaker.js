import getCsrfToken from './getCsrfToken';

function PostRequestMaker(url, data, isItLogin = false) {
    // 
    console.log("isItLogin: ", isItLogin);
    // let formData = {};
    // const dataKeys = Object.keys(data);
    // dataKeys.forEach(key => {
    //     formData[key] = data[key];
    // });

    return new Promise((resolve, reject) => {
        if (isItLogin) {   //normal post requests that need csrf token
            const formData = new URLSearchParams();
            formData.append('username', data.username);
            formData.append('password', data.password);

            let headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                // 'X-XSRF-TOKEN': token // Include the CSRF token in the header
            }
            sendRequest(formData, headers);




            
        } else {    //login post requests, without CSRF token and special body data format
            let formData = {};
            const dataKeys = Object.keys(data);
            dataKeys.forEach(key => {
                formData[key] = data[key];
            });

            let headers = {
                credentials: 'include',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Origin': 'http://localhost:3000',
            }
            getCsrfToken()
            .then(token => {
                formData["X-XSRF-TOKEN"] = token;
                sendRequest(JSON.stringify(formData), headers);
            })
            .catch(error => {
                reject(error);
            });
        }

        function sendRequest(bodyData, headers) {
            fetch(url, {
                method: 'POST',
                headers: headers,
                credentials: 'include',
                body: bodyData
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        }
    });
}

export default PostRequestMaker;