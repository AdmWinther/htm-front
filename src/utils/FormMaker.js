import { useEffect, useState } from "react";
import DoubleCheckFormValues from "../components/C014_DoubleCheckFormValues_Updated";
import LabelInputUPDATED from "../components/C000_LabelInputUPDATED";
import DropDownList from "../components/C000_DropDownList";

const FormMaker = (formFieldsPropertiesList, postURL) => {
    const [formValues,setFormValues] = useState(null);
    useEffect(
        ()=>{
            let initiateFormValue = {}
            //Make the initializer of the formValues object
            formFieldsPropertiesList.forEach((field) => {
                if(field.InputType() === "LabelInput"){
                    initiateFormValue[field.DataLayer()] = '';
                }
                if(field.InputType() === "DropDownList"){
                    initiateFormValue[field.DataLayer()] = field.OptionsList()[0]['id'];
                }
            })
            setFormValues(initiateFormValue)
        },
        []
    )

    
    const [doubleCheck, setDoubleCheck] = useState('');
    const [submitResult, setSubmitResult] = useState('')
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const enterFunction = ()=> {DoubleCheckFormValues(formValues, setDoubleCheck, setIsFormDisabled, postURL)}
    // const fakeEnterFunction = ()=> {
    //     console.log("enter is pressed.")
    //     console.log(formValues)
    //     setDoubleCheck("doubleCheck is changed.")
    //     setSubmitResult(
    //         <p style={{color: "red"}}>
    //             "doubleCheck is changed."
    //         </p>
    //     )
    // }

    let formComponents = formFieldsPropertiesList.map((field, index)=>{
        if(field.InputType() ==="LabelInput"){
            return (
                <LabelInputUPDATED 
                    key={"formObject"+index+"_"+field.DataLayer()} 
                    LabelInputProperties={field} 
                    setStateFunction={setFormValues} 
                    theState={formValues}
                    // enterFunction = {enterFunction}
                    enterFunction = {enterFunction}
                />
            );
        }
        if(field.InputType()==="DropDownList"){
            return(
                <DropDownList
                    key={"NewUserFormDropDownList"}
                    dropDownListProperties = {field}
                    optionsList={field.OptionsList()}
                    setStateFunction={setFormValues}
                    theState={formValues}
                    display1={"name"}
                    display2={"lastName"}
                />
            )
        }
        return ("nothing fits this element!")
    })

    const submitButton = 
        <div key="SubmitButton" className="d-grid gap-2">
            <button
                key="SubmitButton"
                className="btn btn-primary"
                type="button"
                disabled = {isFormDisabled}
                onClick={()=>DoubleCheckFormValues(formValues, setDoubleCheck, setIsFormDisabled, postURL)}
            >
                {"Submit"}
            </button>
        </div>
    
    formComponents.push(submitButton)

    return(
        <div>
            <div key={"form"}>
                {formComponents}
            </div>
            {/* {submitButton} */}
            <div key={"submitResult"}>
                {submitResult}
            </div>
            <div key={"doubleCheck"}>
                {doubleCheck}
            </div>
        </div>
    )
    
}

export default FormMaker;