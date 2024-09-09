import React, { useState } from "react";

import LabelInput from "./C000_LabelInput";

function NewUserPanel() {
	//an array of strings

    const [newUser, setNewUser] = useState({});

	let parameters= [
		["firstName", "First Name", "John"],
		["lastName", "Last Name", "Doe"],
		["emailAddress", "Email Address", "example@abc.com"],
		["password", "Password", "password"],
		["role", "Role", "Admin"],
	];

	return (
		<div className="container-fluid">
			{parameters.map((parameter) => {
				return (
                    <div>
                        <LabelInput key={"NewUserFormLabelInput"+parameter[0]} parameter={parameter} setStateFunction={setNewUser} theState={newUser}/>
                    </div>
				);
			})}
			<div className="d-grid gap-2">
				<button
					key="SubmitButton"
					className="btn btn-primary"
					type="button"
					onClick={() => { console.log("Submit button clicked"); }}
				>
                    {"Submit"}
				</button>
			</div>
		</div>
	);
}

export default NewUserPanel;
