function getUserType() {
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_BACKEND_URL+'/api/user/userType', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to get user type');
            }
        }).then(data => {
            resolve(data.value);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export default getUserType;