import React, { useState } from "react";


import LabelInput from "./C000_LabelInput";
import DropDownList from "./C000_DropDownList";
import DoubleCheckFormValues from "./C014_DoubleCheckFormValues";

function NewUserPanel() {
	const postRequestAddress = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_NEW_USER;

	let labelInputParameters= [
		["name", "First Name", "John"],
		["lastName", "Last Name", "Doe"],
		["emailAddress", "Email Address", "example@abc.com"],
		["password", "Password", "password"]
	];

    let dropdownParameters = [
        "role", "Role", process.env.REACT_APP_USER_ROLES.split(",")
    ];    
    
    const [formValues,setFormValues] = useState({});
    const [newUser, setNewUser] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	return (
		<div className="container-fluid">
			{labelInputParameters.map((parameter, index) => {
				return (
                        <LabelInput key={"NewUserFormLabelInput"+index} parameter={parameter} setStateFunction={setFormValues} theState={formValues}/>
				);
			})}
            
            <DropDownList key={"NewUserFormDropDownList"} parameter={dropdownParameters} setStateFunction={setFormValues} theState={formValues}/>
            
			<div className="d-grid gap-2">
				<button
					key="SubmitButton"
					className="btn btn-primary"
					type="button"
                    disabled = {submitButtonDisabled}
					onClick={()=>DoubleCheckFormValues(formValues, setNewUser, setSubmitButtonDisabled, postRequestAddress)}
				>
                    {"Submit"}
				</button>
			</div>
            <div>
                {newUser}
            </div>
		</div>
	);
}

export default NewUserPanel;
