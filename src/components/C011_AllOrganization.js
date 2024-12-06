import React, {useState, useEffect } from "react";
import GetRequestMaker from "../services/GetRequestMaker";
import makeTable from "../utils/MakeTable";

function AllOrganization() {
    const [OrganizationList, SetOrganizationList] = useState([]);


    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_ALL_ORGANIZATION
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => { 
            let table = makeTable(data, ['#','id','Name', 'Description'])
            SetOrganizationList(table);
        })
    }, []);
    return (
        <div>
            <h1>This is All Organization component.</h1>
            <>{OrganizationList}</>
        </div>
    );
}
export default AllOrganization;