import LabelInput from "./LabelInput";

function NewUserPanel() {
	//an array of strings
	let parameters: string[] = ["Name", "Lastname", "Email", "Password"];

	return (
		<div className="container-fluid">
			{parameters.map((parameter) => {
				return (
					<div key={parameter}>
						<LabelInput parameter={parameter} />
					</div>
				);
			})}
			<div className="d-grid gap-2">
				<label
					key="SubmitLabel"
					className="form-label"
				></label>
				<button
					key="SubmitButton"
					className="btn btn-primary"
					type="button"
					onClick={() => {
						let url = "http://localhost:8080/api/user/newUser";
						fetch(url)
							.then((response) => {
								return response.json();
							})
							.then((data) => {
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
