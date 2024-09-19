import React from "react";
import LabelInput from "./C000_LabelInput";

const Form(FormObjectArray, setFormValues, formValues, formName="newForm") => {
    const formComponents = FormObjectArray.map((FormObject, index) => {
        if (FormObject.type === "LabelInput") {
            return (
                    <LabelInput key={formName+index} parameter={FormObject} setStateFunction={setFormValues} theState={formValues}/>
            );
        }
    });
    return (
        <div className="container-fluid">
            {formComponents}
        </div>
    );
}