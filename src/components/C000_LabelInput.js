//this is a component that takes in a parameter and returns a label and an input field
//the parameter is the name of the label and the placeholder of the input field
//the setStateFunction is a function that takes in the value of the input field. This function is passed from the parent component
//and is used to update the state of the parent component. Therefore this handler should be a setState function that is made in the parent component

//the variable parameter is an array that contains the name of the label,(the variable will be sent to the backend server with this name)
//the display neme of the label, (the text that is used in front end as the label for that input field) the placeholder of the input field.

import React from "react";
//import MakeItReadable from "../services/MakeItReadable"

const LabelInput =({fieldProperties, setStateFunction, theState, enterFunction})=> {

    let field = fieldProperties.DataLayer();
    let display = fieldProperties.Label();
    let placeholder = fieldProperties.PlaceHolder();

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            enterFunction();
        }
    };

    return (
        <div key={field}>
            <label
                htmlFor="inputPassword5"
                className="form-label"
            >
                {display}
            </label>
            <input
                key={field}
                type={
                    fieldProperties.DataLayer() === "Password" ? "password" : "text"
                }
                id={field}
                className="form-control"
                placeholder={placeholder}
                onKeyDown={handleKeyPress}
                onChange={(event) => {
                 	let newInputValue = event.target.value;
                 	// const currentKeys = Object.keys(theState);


                    if(field === "emailAddress"){
                        //making sure the email address is in lowercase.
                        newInputValue = newInputValue.toLowerCase();
                    }
                    setStateFunction({...theState, [field]: newInputValue});

                 }}
            />
        </div>
    )
}

export default LabelInput;