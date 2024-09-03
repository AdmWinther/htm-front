//this is a component that takes in a parameter and returns a label and an input field
//the parameter is the name of the label and the placeholder of the input field
//the setStateFunction is a function that takes in the value of the input field. This function is passed from the parent component
//and is used to update the state of the parent component. Therefore this handler should be a setState function that is made in the parent component

import React from "react";
//import MakeItReadable from "../services/MakeItReadable"


const LabelInput =({parameter, setStateFunction, theState})=> {
    let field = parameter[0];
    let display = parameter[1];
    let placeholder = parameter[2];
    return (
        <div>
            <label
                htmlFor="inputPassword5"
                className="form-label"
            >
                {display}
            </label>
            <input
                key={field}
                type={
                    parameter === "Password" ? "password" : "text"
                }
                id={field}
                className="form-control"
                placeholder={placeholder}
                onChange={(event) => {
                 	let newInputValue = event.target.value;
                 	const currentKeys = Object.keys(theState);
                    if(currentKeys.includes(field)) {
                        setStateFunction({...theState, [field]: newInputValue});
                    } else {
                        setStateFunction({...theState, [field]: newInputValue});
                    }
                 }}
            />
        </div>
    )
}

export default LabelInput;