import { useEffect, useState } from "react";
import DoubleCheckFormValues from "../components/C014_DoubleCheckFormValues_Updated";
import LabelInputUPDATED from "../components/C000_LabelInput";
import DropDownList from "../components/C000_DropDownList";
import NotUpdatableLabelInput from "../components/C026_NOTUpdatableLabelInput"
import UpdatableLabelInput from "../components/C025_UpdatableLabelInput"

const FormMaker = (formFieldsPropertiesList, postURL) => {
    const [formValues,setFormValues] = useState(null);
    useEffect(
        ()=>{
            let initiateFormValue = {}
            //Make the initializer of the formValues object
            formFieldsPropertiesList.forEach((field) => {
                if(field.Type() === "LabelInput"){
                    initiateFormValue[field.DataLayer()] = '';
                }
                if(field.Type() === "NotUpdatableLabelInput"){
                    initiateFormValue[field.DataLayer()] = field.placeHolder();
                }
                if(field.Type() === "UpdatableLabelInput"){
                    initiateFormValue[field.DataLayer()] = field.placeHolder();
                }
                if(field.Type() === "DropDownList"){
                    initiateFormValue[field.DataLayer()] = field.OptionsList()[0]['id'];
                }
            })
            setFormValues(initiateFormValue)
        },
        []
    )

    
    const [doubleCheck, setDoubleCheck] = useState('');
    // const [submitResult, setSubmitResult] = useState('')
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const enterFunction = ()=> {DoubleCheckFormValues(formValues, setDoubleCheck, setIsFormDisabled, postURL)}

    let formComponents = formFieldsPropertiesList.map((field, index)=>{
        if(field.Type() ==="LabelInput"){
            return (
                <LabelInputUPDATED 
                    key={"formObject"+index+"_"+field.DataLayer()} 
                    fieldProperties={field} 
                    setStateFunction={setFormValues} 
                    theState={formValues}
                    // enterFunction = {enterFunction}
                    enterFunction = {enterFunction}
                />
            );
        }
        if(field.Type() ==="NotUpdatableLabelInput"){
            return (
                <NotUpdatableLabelInput 
                    key={"formObject"+index+"_"+field.DataLayer()} 
                    fieldProperties={field}
                />
            );
        }
        if(field.Type() ==="UpdatableLabelInput"){
            return (
                <UpdatableLabelInput 
                    key={"formObject"+index+"_"+field.DataLayer()} 
                    fieldProperties={field}
                    setStateFunction={setFormValues} 
                    theState={formValues}
                />
            );
        }
        if(field.Type()==="DropDownList"){
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
            {/* {submitButton}
            <div key={"submitResult"}>
                {submitResult}
            </div> */}
            <div key={"doubleCheck"}>
                {doubleCheck}
            </div>
        </div>
    )
    
}

export default FormMaker;