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
	let [message, setMessage] = React.useState("");

	//defining the state for the input fields
	let MyStates = {};
	for (let parameter of parameters) {
		MyStates[parameter] = React.useState("");
	}

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
							onChange={(event) => {
								MyStates[parameter][1](event.target.value);
								console.log(MyStates[parameter][0]);
							}}
						/>
					</div>
				);
			})}
			<div className="d-grid gap-2">
				{/* The message to be displayed as a result of making a new user */}
				{/* on top of the submit button */}
				<label
					key="SubmitLabel"
					className="form-label"
					style={{ color: "red" }}
				>
					{message}
				</label>
				{/* The submit button */}
				<button
					key="SubmitButton"
					className="btn btn-primary"
					type="button"
					onClick={() => {
						let requestBody = {};
						requestBody.id = "";
						for (let parameter of parameters) {
							requestBody[parameter] = MyStates[parameter][0];
						}
						console.log(requestBody);
						let url = "http://localhost:8080/api/user/newUser";
						fetch(url, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								"X-Xsrf-Token":
									"1REYLRmYJ86smHHcJeaB_MtFhUwFRm3DcsbFTmmF4M1qmVJstHAvSSyoRPuBrEG_R8u1xPt3qC0zcwvuS_X0elG11v5d-GJd",
							},
							body: JSON.stringify(requestBody),
						})
							.then((response) => {
								const headers = response.headers.toString();
								// const xsrfToken = headers.get("Set-Cookie");
								return headers;
							})
							.then((data) => {
								console.log("data");
								// setMessage(data.message);
								console.log(data);
							});
					}}
				>
					{"Submit"}
				</button>
			</div>
		</div>
	);
}

export default NewUserPanel;
