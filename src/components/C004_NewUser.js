// import React, { useState } from "react";


// import LabelInput from "./C000_LabelInput";
// import DropDownList from "./C000_DropDownList";
// import DoubleCheckFormValues from "./C014_DoubleCheckFormValues";
import FormFieldProperties from "../utils/FormFieldProperties";
import FormMaker from "../utils/FormMaker";

function NewUser() {
	const postRequestAddress = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_NEW_USER;

    let formFieldsPropertiesList = [
		new FormFieldProperties("LabelInput","name",        "First Name",       "John"),
		new FormFieldProperties("LabelInput","lastName",    "Last Name",        "Doe"),
		new FormFieldProperties("LabelInput","emailAddress","Email Address",    "example@abc.com"),
		new FormFieldProperties("LabelInput","password",    "Password",         "password")
	]

    return FormMaker(formFieldsPropertiesList, postRequestAddress)
}

export default NewUser;
