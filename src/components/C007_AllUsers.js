import React, { useEffect, useState } from "react";
import MakeTable from "../utils/MakeTable";
import GetRequestMaker from "../services/GetRequestMaker";
import EditUser from "./C023_EditUser";

function AllUsers() {
    const [pageContent, setPageContent] = useState();
    
    const OpenUserProfile = (userId) => {
        console.log("userId in OpenUserProfile function:",userId)
        setPageContent(
            <div>
                <EditUser updateUser={userId} previousPage= {"/Dashboard/users/AllUsers"}/>
            </div>
        )
    }

    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_ALL_USERS
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => {
            const theTable = <MakeTable data={data} tableHeaders={['#','Name', 'Last Name', 'Email', "Role", "Organization"]} handleClick={OpenUserProfile} />
            setPageContent(theTable)
        })
    }, []);

    return (
        <div>
            {pageContent}
        </div>
    );

}


export default AllUsers;