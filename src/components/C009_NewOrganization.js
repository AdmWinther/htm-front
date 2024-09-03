import React, { useState } from "react";
import LabelInput from "./C000_LabelInput";





const NewOrganization = () => {

    let allParameters= [
        ["NewOrganizationName", "Organization Name", "My Organization"],
        ["SuperUserName", "Super User Name", "John"], 
        ["SuperUserLastName", "Super User Last Name", "Doe"],
        ["SuperUserEmailAddress", "Super User Email Address", "example@abc.com"],
        ["SuperUserPassword", "Super User Password", "password"],
    ];
    const [formValues,setFormValues] = useState({});

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
					onClick={()=>submit(formValues)}
				>
                    {"Submit"}
				</button>
			</div>
		</div>
    );
}



const submit = (formValues) => {
    console.log("This is the form values");
    console.log(formValues);
}


export default NewOrganization;