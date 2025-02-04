import {useEffect, useState} from "react";
import PostRequestMaker from "../services/PostRequestMaker";
import FormFieldProperties from "../utils/FormFieldProperties"
import FormMaker from "../utils/FormMaker";

function EditProjectInfo({projectId, previousPage}) {

    const[formBluePrint, setFormBluePrint] = useState([])
    
    useEffect(() => {
        let requestProjectPropUrl = process.env.REACT_APP_BACKEND_URL+"/api/project/requestProjectInfo"
        PostRequestMaker(
            requestProjectPropUrl,
            {"projectId": projectId}, 
            false
        )
        .then(respons => respons.json())
        .then((data)=> {
            
            let  formFieldPropertiesList = [];
            // Project Name field, it is updatable so it is enough to 
            formFieldPropertiesList.push(new FormFieldProperties("UpdatableLabelInput", "projectName", "Project Name", data["projectName"]))
            // Project Description field, updatable
            formFieldPropertiesList.push(new FormFieldProperties("UpdatableLabelInput", "projectDescription", "Project Description", data["projectDescription"]))
            //projectId Field
            formFieldPropertiesList.push(new FormFieldProperties("NotUpdatableLabelInput", "projectId", "Project ID", data["projectId"]))
            //Project Manager field(s), there might be more than one project manager
            let projectManagersData = data["projectManagers"]
            let projecManagersPropertiesList = projectManagersData.map(element => {
                return new FormFieldProperties(
                    "LabelInput",
                    "projectManager", 
                    "Project Manager", 
                    element["fullName"]
                )
            });

            formFieldPropertiesList = [...formFieldPropertiesList, ...projecManagersPropertiesList]

            setFormBluePrint(formFieldPropertiesList)
        })
    },[])
    
    let updateProjectPropUrl = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_PROJECT_Name+projectId
    return(
        FormMaker(formBluePrint, updateProjectPropUrl)
    )

}


export default EditProjectInfo;