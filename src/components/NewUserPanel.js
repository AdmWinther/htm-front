import React from "react";

function NewUserPanel() {
	//an array of strings
	let parameters= [
		"name",
		"lastName",
		"emailAddress",
		"password",
		"role",
	];

	//define the state for the message to be displayed as a result of making a new user
	// let [message, setMessage] = React.useState("");

	//defining the state for the input fields
	// let MyStates = {};
	// for (let parameter of parameters) {
	// 	MyStates[parameter] = React.useState("");
	// }

	return (
		<div className="container-fluid">
			{parameters.map((parameter) => {
				return (
					<div key={parameter}>
						<label
							htmlFor="inputPassword5"
							className="form-label"
						>
							{parameter.charAt(0).toUpperCase() +
								parameter.slice(1)}
						</label>
						<input
							key={parameter}
							type={
								parameter === "Password" ? "password" : "text"
							}
							id={parameter}
							className="form-control"
							placeholder={parameter}
							// onChange={(event) => {
							// 	MyStates[parameter][1](event.target.value);
							// 	console.log(MyStates[parameter][0]);
							// }}
						/>
					</div>
				);
			})}
			<div className="d-grid gap-2">
				{/* The message to be displayed as a result of making a new user */}
				{/* on top of the submit button */}
				{/* <label
					key="SubmitLabel"
					className="form-label"
					style={{ color: "red" }}
				>
					{message}
				</label> */}
				{/* The submit button */}
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
