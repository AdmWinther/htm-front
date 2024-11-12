function getUserType() {
    return new Promise((resolve, reject) => {
        // console.log("localStorage in getUserType");
        // console.log(localStorage.getItem('token'));
        // console.log("localStorage in getUserType-End");
        fetch(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_USER_TYPE, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => {
            if(response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to get user type');
            }
        }).then(data => {
            resolve(data.roles[0]);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export default getUserType;