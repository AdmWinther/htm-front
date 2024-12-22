import React, {useEffect, useState} from "react";

import PostRequestMaker from "../services/PostRequestMaker";

import UpdatableLabelInput from "./C025_UpdatableLabelInput";
import LabelInput from "./C000_LabelInput";
import FormFieldProperties from "../utils/FormFieldProperties"
import NOTUpdatableLabelInput from "./C026_NOTUpdatableLabelInput";

function EditProjectInfo({projectId, previousPage}) {

    let requestProjectPropUrl = process.env.REACT_APP_BACKEND_URL+"/api/project/requestProjectInfo"
    let updateUrl = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_PROJECT_Name+projectId
    
    const [components, setComponents] = useState("")

    useEffect(
        ()=>{
            PostRequestMaker(
                requestProjectPropUrl,
                {"projectId": projectId}, 
                false
            )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let projectNameFieldProp = new FormFieldProperties("LabelInput", "projectName", "Project Name", data["projectName"])
                let projectComponents = [<UpdatableLabelInput fieldProperties={projectNameFieldProp} updateUrl={updateUrl} />]

                let projectDescriptionFieldProp = new FormFieldProperties("LabelInput", "projectDescription", "Project Description", data["projectDescription"])
                projectComponents.push(<UpdatableLabelInput fieldProperties={projectDescriptionFieldProp} updateUrl={updateUrl} />)

                let projectIdFieldProp = new FormFieldProperties("LabelInput", "projectId", "Project ID", data["projectId"])
                projectComponents.push(<NOTUpdatableLabelInput fieldProperties={projectIdFieldProp}/>)
                
                let projectManagersData = data["projectManagers"]
                // console.log(projectManagersData)
                let projecManagersComponents = projectManagersData.map(element => {
                    let projecManagerFieldProp = new FormFieldProperties("LabelInput", "projectManager", "Project Manager", element["fullName"])
                    return <UpdatableLabelInput fieldProperties={projecManagerFieldProp} updateUrl={updateUrl} />
                });

                console.log(projectComponents)
                console.log(projecManagersComponents)
                projectComponents = [...projectComponents, ...projecManagersComponents]
                
                // data["projectReviewers"].map(element => {
                //     let projectDescriptionFieldProp = new FormFieldProperties("LabelInput", "projectReviewer", "Project Reviewer", element["userName"])
                //     projectComponents.push(<UpdatableLabelInput fieldProperties={projectDescriptionFieldProp} updateUrl={updateUrl} />)
                // });

                // data["projectApprovers"].map(element => {
                //     let projectDescriptionFieldProp = new FormFieldProperties("LabelInput", "projectApprover", "Project Approver", element["userName"])
                //     projectComponents.push(<UpdatableLabelInput fieldProperties={projectDescriptionFieldProp} updateUrl={updateUrl} />)
                // });

                // data["projectReaders"].map(element => {
                //     let projectDescriptionFieldProp = new FormFieldProperties("LabelInput", "projectReader", "Project Approver", element["userName"])
                //     projectComponents.push(<UpdatableLabelInput fieldProperties={projectDescriptionFieldProp} updateUrl={updateUrl} />)
                // });

                setComponents(projectComponents)
            })
        },[]
    )
    
    return(
        <div className="container-fluid">
            {components}
        </div>
    )

}


export default EditProjectInfo;