import React, { useEffect } from "react";


const DropDownList = ({dropDownListProperties, optionsList, setStateFunction, theState, display1, display2, display3=null}) => {
    useEffect(() => {
        if(Object.keys(optionsList).length > 0){
            setStateFunction({...theState, [dropDownListProperties.DataLayer()]:optionsList[0].id})
        }
    },[])
    // "fieldName" is used as key to save the value of drop down in the object which will be sent to the backend.
    const options = optionsList.map(
        (option) => {
            if(display2 ===null & display3 ===null) {
                return (
                    <option key={option[display1]} value={option["id"]}>{option[display1]}</option>
                )
            }
            if(display2 !==null & display3 ===null) {
                return (
                    <option key={option[display1]+option[display2]} value={option["id"]}>{option[display1]+" "+option[display2]}</option>
                )
            }
            return <option key={option[display1]+option[display2]+option[display3]} value={option["id"]}>{option[display1]+" "+option[display2]+" "+option[display3]}</option>
        }
    )
    return (        
        <label className="form-label" key={dropDownListProperties.DataLayer()}> {dropDownListProperties.Label()}
            <select className="form-select" placeholder="Role" onChange={(event) =>{updateTheState(event, setStateFunction, theState, dropDownListProperties.DataLayer())}}>
                {options}
            </select>
        </label>
    );
}

const updateTheState = (event, setStateFunction, theState, fieldName) => {

    let newInputValue = event.target.value;
    console.log(event)
    setStateFunction({...theState, [fieldName]: newInputValue});
}


export default DropDownList;