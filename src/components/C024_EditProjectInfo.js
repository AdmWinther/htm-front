import React from "react";
import UpdatableStringField from "./C025_UpdatableStirngProperty";

function EditProjectInfo({projectId, previousPage}) {

    let requestProjectPropUrl = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_REQUEST_PROJECT_NAME
    let updateUrl = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_PROJECT_Name+projectId
    return(
        <div>
            <p>
                "this page is under construction"
            </p>
            <p>
                "Display the infomration for project {projectId} + the possebility to edit it."
            </p>
            <p>
                "PROJECT ID: {projectId}."
            </p>
            <UpdatableStringField projectId={projectId} requestUrl={requestProjectPropUrl} updateUrl={""} label={"Project Name"} dataLayerLabel={"name"}/>
            {/* <p>
                {projectEditors}
            </p>
            <p>
                {projectReviewers}
            </p>
            <p>
                {projectApprove}
            </p> */}
            <button onClick={()=> window.location.href = previousPage}>"Return"</button>
        </div>
    )

}


export default EditProjectInfo;