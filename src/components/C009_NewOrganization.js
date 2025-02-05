import { useState,useEffect } from "react";
import FormFieldProperties from "../utils/FormFieldProperties";
import FormMaker from "../utils/FormMaker";




const NewOrganization = () => {
    const[formBluePrint, setFormBluePrint] = useState([])
    //Initialize the formBluePrint
    useEffect(
        ()=>{
            let formFieldsPropertiesList= [
                new FormFieldProperties("LabelInput","organization_name",   "Organization Name",        "New Organization"),
                new FormFieldProperties("LabelInput","description",         "Description",              "This new organization produces ..."),
                new FormFieldProperties("LabelInput","superuser_name",      "Superuser Name",           "John"),
                new FormFieldProperties("LabelInput","superuser_lastname",  "Superuser Last Name",      "Doe"),
                new FormFieldProperties("LabelInput","superuser_email",     "Superuser Email Address",  "example@abc.com"),
                new FormFieldProperties("LabelInput","superuser_password",  "Superuser Password",       "password")
            ];
            setFormBluePrint(formFieldsPropertiesList)
        },[]
    )
    const postRequestAddress = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_NEW_ORGANIZATION;
    return FormMaker(formBluePrint,postRequestAddress)
}


export default NewOrganization;