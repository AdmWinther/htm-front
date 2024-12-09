import { useEffect, useState } from "react";

import GetRequestMaker from "../services/GetRequestMaker";
import FormFieldProperties from "../utils/FormFieldProperties";
import FormMaker from "../utils/FormMaker";

function NewProject() {
    const[formBluePrint, setFormBluePrint] = useState([])

    useEffect(() => {
        let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_ORGANIZATION_USERS
        GetRequestMaker(url)
        .then(respons => respons.json())
        .then((data)=> {
            console.log(data)

            let  formFieldPropertiesList = [];
            formFieldPropertiesList.push(new FormFieldProperties("LabelInput", "projectName", "Project Name", "My New Project"))
            formFieldPropertiesList.push(new FormFieldProperties("LabelInput", "description", "Project Description", "this is a project to ..."))
            formFieldPropertiesList.push(new FormFieldProperties(
                "DropDownList", 
                "projectManager", 
                "Project Manager", 
                "       ", 
                data
            ))
            setFormBluePrint(formFieldPropertiesList)
        })

    },[])

    const postRequestAddress = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_POST_NEW_PROJECT;
    return FormMaker(formBluePrint, postRequestAddress)
}

export default  NewProject;
