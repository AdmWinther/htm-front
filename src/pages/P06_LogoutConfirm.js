import React, { useState } from "react";
import PostRequestMaker from "../services/PostRequestMaker";

const LogoutForm = () => {
    //form status variables
    const [children, setChildren] = useState(null);

    //function to handle the logout
    const handleLogout = () => {
        let url = process.env.REACT_APP_BACKEND_URL+ process.env.REACT_APP_ENDPOINT_LOGOUT;
        PostRequestMaker(url, {})
        .then(response => {
            if(response.status === 200){
                localStorage.clear();
                window.location.href = '/login';
            } else {
                setChildren(
                    <div>
                        <p style={{color: "red"}}>"Logout Failed"</p>
                    </div>
                );
            }
        })
    }

    const handleCancelLogout = () => {
        // Todo: this should be changed to the dashboard and there should be no difference whether it is user or admin
        window.location.href = '/Dashboard';
    }

    return (
        <div className="h-100 d-flex justify-content-center align-items-center" >
            <div className="h-auto">
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Are you sure you want to logout?</label>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleLogout}>Yes</button>
                    <button className="btn btn-primary" onClick={handleCancelLogout}>No</button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LogoutForm;