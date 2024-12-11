import React, { useEffect, useState } from "react";
import makeTable from "../utils/MakeTable";
import GetRequestMaker from "../services/GetRequestMaker";

function AllProjects() {
    const [allProjectsTable, setAllProjectsTable] = useState([]);

    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_ALL_PROJECTS
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => {
            console.log("data in C022_allProjects.js is:", data)
            let theTable = makeTable(data, ['#','Project Name', 'Project Manager Name', 'Project Manager Last Name', 'Project Manager Email', "Organization"])
            setAllProjectsTable(theTable)
        })
    }, []);

    return (
        <div>
            {allProjectsTable}
        </div>
    );

}


export default AllProjects;