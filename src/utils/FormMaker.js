import { useEffect, useState } from "react";
import DoubleCheckFormValues from "../components/C014_DoubleCheckFormValues_Updated";
import LabelInput from "../components/C000_LabelInput";
import DropDownList from "../components/C000_DropDownList";
import NotUpdatableLabelInput from "../components/C026_NOTUpdatableLabelInput"
import UpdatableLabelInput from "../components/C025_UpdatableLabelInput"

const FormMaker = (formFieldsPropertiesList, postURL) => {
    const [formValues,setFormValues] = useState(null);
    const [doubleCheck, setDoubleCheck] = useState('');
    //for each updateble label input, we need to set one flag. The submit button will be active
    //only when all of the UpdatableLabelInputs are confirmed.
    const [updatableLabelInputIsConfiremed, setUpdatableLabelInputIsConfiremed] = useState({})
    //The submit button will be active only if all of the updatable label input fields are confirmed.
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
    
    //We need to initialize the formValues object. 
    // This will be done only once, when the formFieldsPropertiesList
    useEffect(
        ()=>{
            let initiateFormValue = {}
            let initializeUpdatableLabelInputIsConfiremed = {}
            //Make the initializer of the formValues object
            formFieldsPropertiesList.forEach((field) => {
                if(field.Type() === "LabelInput"){
                    initiateFormValue[field.DataLayer()] = '';
                }
                if(field.Type() === "NotUpdatableLabelInput"){
                    initiateFormValue[field.DataLayer()] = field.PlaceHolder();
                }
                if(field.Type() === "UpdatableLabelInput"){
                    initiateFormValue[field.DataLayer()] = field.PlaceHolder();
                    initializeUpdatableLabelInputIsConfiremed[field.DataLayer()]= true

                }
                if(field.Type() === "DropDownList"){
                    initiateFormValue[field.DataLayer()] = field.OptionsList()[0]['id'];
                }
            })
            setFormValues(initiateFormValue)
            setUpdatableLabelInputIsConfiremed(initializeUpdatableLabelInputIsConfiremed)
        },
        [formFieldsPropertiesList]
    )

    //We need to check if all of the updatable label inputs are confirmed. 
    // If they are, we can enable the submit button. Any change in the updatableLabelInputIsConfiremed
    // will trigger this useEffect.
    useEffect(
        ()=>{
            let areAllTrue = true
            let keys = Object.keys(updatableLabelInputIsConfiremed)
            keys.forEach(
                (key) =>{
                    if(!updatableLabelInputIsConfiremed[key]){
                        areAllTrue = false
                    } 
                }
            )
            if(areAllTrue){
                setIsSubmitButtonDisabled(false)
                console.log("All confirmed")
            } else{
                setIsSubmitButtonDisabled(true)
                console.log("NOT confirmed")
            }
        },
        [updatableLabelInputIsConfiremed]
    )

    //This function will be called when the submit button is clicked.
    const PreSubmit = ()=> {DoubleCheckFormValues(formValues, setDoubleCheck, setIsSubmitButtonDisabled, postURL)}

    let formComponents = formFieldsPropertiesList.map((field, index)=>{
        if(field.Type() ==="LabelInput"){
            return (
                <LabelInput 
                    key={"formObject"+index+"_"+field.DataLayer()} 
                    fieldProperties={field} 
                    setStateFunction={setFormValues} 
                    theState={formValues}
                    // enterFunction = {enterFunction}
                    enterFunction = {PreSubmit}
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
                    isFormDisabled = {setIsSubmitButtonDisabled}
                    updatableLabelInputIsConfiremed = {updatableLabelInputIsConfiremed}
                    setUpdatableLabelInputIsConfiremed = {setUpdatableLabelInputIsConfiremed}
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
                disabled = {isSubmitButtonDisabled}
                onClick={()=>DoubleCheckFormValues(formValues, setDoubleCheck, setIsSubmitButtonDisabled, postURL)}
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
            <div key={"doubleCheck"}>
                {doubleCheck}
            </div>
        </div>
    )
    
}

export default FormMaker;