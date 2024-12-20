import React from "react";
import PostRequestMaker from "../services/PostRequestMaker";


const DoubleCheckFormValues = (formValues, setNewOrganization, setSubmitButtonDisabled, postRequestAddress) => {
    if(process.env.REACT_APP_Verbose)console.log("This is the form values");
    //Add a new element under the submit button that will display the form values and ask the user to confirm
    const formFields = Object.keys(formValues);
    
    //for loop on formFields
    const enteredValues = formFields.map((field) => {
        return (
                <p key={field}>{field}: {formValues[field]}</p>
        );
    })

    enteredValues.push(
        <div key={"confirmCancelButtons"}>
            <button
                key="ConfirmButton"
                className="btn btn-primary"
                type="button"
                onClick={()=>Confirm(formValues, setNewOrganization, setSubmitButtonDisabled, postRequestAddress)}
            >
                {"Confirm"}
            </button>

            <button
                key="CancelButton"
                className="btn btn-primary"
                type="button"
                onClick={()=>Cancel(setNewOrganization, setSubmitButtonDisabled)}
            >
                {"Cancel"}
            </button>
        </div>
        
    );
    setNewOrganization(enteredValues);
    setSubmitButtonDisabled(true);
    if(process.env.REACT_APP_Verbose === "true"){
        console.log(formValues);
        console.log(enteredValues);
    }
}

export default DoubleCheckFormValues;

function Cancel(setNewOrganization, setSubmitButtonDisabled) {
    setSubmitButtonDisabled(false);
    setNewOrganization('');
}

function Confirm(formValues, setNewOrganization, setSubmitButtonDisabled, postRequestAddress) {
    if(process.env.REACT_APP_Verbose) console.log("Confirm is called");
    PostRequestMaker(postRequestAddress, formValues)
    .then((response) => { return response.json();})
    .then((data) => {
        if(process.env.REACT_APP_Verbose) console.log(data);
        if(data.error === undefined) {
            setNewOrganization(<p style={{color: "green"}}>{data.message}</p>);
        } else {
            setNewOrganization(<p style={{background:"yellow", color: "red"}}>{data.error}</p>);
        }
        setSubmitButtonDisabled(false);
        
    })
}