import React from "react";

const DropDownList = ({parameter, setStateFunction, theState}) => {


    let field = parameter[0];
    let display = parameter[1];
    let placeholder = parameter[2];
    const options = placeholder.map(
        (option) => {
            return (
                <option key={option} value={option}>{option}</option>
            )
        }
    )
    return (





        
        <label className="form-label" key={field}> {display}
            <select className="form-select" placeholder="Role" onChange={(event) =>{updateTheState(event, setStateFunction, theState, field)}}>
                {options}
            </select>
        </label>
    );
}

const updateTheState = (event, setStateFunction, theState, field) => {

    let newInputValue = event.target.value;
    const currentKeys = Object.keys(theState);
    if(currentKeys.includes(field)) {
        setStateFunction({...theState, [field]: newInputValue});
    } else {
        setStateFunction({...theState, [field]: newInputValue});
    }
    console.log("theState", theState);
}


export default DropDownList;