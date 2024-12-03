import React, {useState, useEffect } from "react";
import GetRequestMaker from "../services/GetRequestMaker";

function AllOrganization() {
    const [OrganizationList, SetOrganizationList] = useState([]);


    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_ALL_ORGANIZATION
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => {
            
            let tableheader = (<thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Organization Name</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>)
            
            let rows =data.map((organization, index) => {
                return (
                    <tr key={organization.id}>
                        <th scope="row">{index+1}</th>
                        <td>{organization.name}</td>
                        <td>{organization.description}</td>
                    </tr>
                );
            });

            let table = <table className="table">
                {tableheader}
                <tbody>
                    {rows}
                </tbody>
            </table>
            
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