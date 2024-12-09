import React, { useEffect, useState } from "react";
import makeTable from "../utils/MakeTable";
import GetRequestMaker from "../services/GetRequestMaker";

function AllUsers() {
    const [allUsersTable, setAllUsersTable] = useState([]);

    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_ALL_USERS
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => { 
            let theTable = makeTable(data, ['#','Name', 'Last Name', 'Email', "Role", "Organization"])
            setAllUsersTable(theTable)
        })
    }, []);

    return (
        <div>
            {allUsersTable}
        </div>
    );

}


export default AllUsers;