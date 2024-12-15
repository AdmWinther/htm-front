import React, {useState, useEffect } from "react";
import GetRequestMaker from "../services/GetRequestMaker";
import MakeTable from "../utils/MakeTable";

function AllOrganization() {
    const [OrganizationList, SetOrganizationList] = useState([]);

    const OpenOrganization = (organizationId)=> {console.log("Open OrganizationInfo page for Org.ID:", organizationId)}


    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_ALL_ORGANIZATION
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => { 
            // let table = MakeTable(data, ['#','Organization Name', 'Superuser Name', 'Superuser Lastname', 'Superuser Email Address'])
            let table = <MakeTable
                data = {data}
                tableHeaders={['#','Organization Name', 'Superuser Name', 'Superuser Lastname', 'Superuser Email Address']}
                handleClick={OpenOrganization}
            />
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