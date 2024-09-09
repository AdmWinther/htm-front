import React, { useState } from "react";
import LabelInput from "./C000_LabelInput";
import DoubleCheckFormValues from "./C014_DoubleCheckFormValues";





const NewOrganization = () => {

    const postRequestAddress = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_NEW_ORGANIZATION;
    let allParameters= [
        ["organization_name", "Organization Name", "My Organization"],
        ["superuser_name", "Super User Name", "John"], 
        ["superuser_lastname", "Super User Last Name", "Doe"],
        ["superuser_email", "Super User Email Address", "example@abc.com"],
        ["superuser_password", "Super User Password", "password"],
    ];
    const [formValues,setFormValues] = useState({});
    const [newOrganization, setNewOrganization] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    return (
        <div className="container-fluid">
			{allParameters.map(( oneParameter, index) => {
				return (
					// <LabelInput parameter={allInputStates.name} inputChangeHandler={allInputStates.stateVariable} theState={allInputStates.setStateFunction}/>
					<LabelInput key={"NewOrganizationFormLabelInput"+index} parameter={oneParameter} setStateFunction={setFormValues} theState={formValues}/>
				);
			})}
			<div className="d-grid gap-2">
				<button
					key="SubmitButton"
					className="btn btn-primary"
					type="button"
                    disabled = {submitButtonDisabled}
					onClick={()=>DoubleCheckFormValues(formValues, setNewOrganization, setSubmitButtonDisabled, postRequestAddress)}
				>
                    {"Submit"}
				</button>
			</div>
            <div>
                {newOrganization}
            </div>
		</div>
    );
}


export default NewOrganization;