import React, { useEffect, useState } from "react";
import MakeTable from "../utils/MakeTable";
import GetRequestMaker from "../services/GetRequestMaker";
import EditProjectInfo from "./C024_EditProjectInfo";

function AllProjects() {
    const [pageContent, setPageContent] = useState();

    const OpenProjectInfo = (projectId) => {
        setPageContent(
            <div>
                <EditProjectInfo projectId={projectId} previousPage= {"/Dashboard/projects/Allprojects"}/>
            </div>
        )
    }

    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_ALL_PROJECTS
        GetRequestMaker(url)
        .then(response => response.json())
        .then(data => {
            let theTable = <MakeTable 
                data={data} 
                tableHeaders={['#','Project Name', 'Project Manager Name', 'Project Manager Last Name', 'Project Manager Email', "Organization"]}
                handleClick={OpenProjectInfo}
            />
            // setAllProjectsTable(theTable)
            setPageContent(theTable)
        })
    }, []);

    return (
        <div>
            {pageContent}
        </div>
    );

}


export default AllProjects;