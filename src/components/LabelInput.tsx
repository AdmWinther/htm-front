function LabelInput(props: {
	parameter: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<label
				htmlFor="inputPassword5"
				className="form-label"
			>
				{props.parameter}
			</label>
			<input
				key={props.parameter}
				type={props.parameter === "Password" ? "password" : "text"}
				id={props.parameter}
				className="form-control"
				placeholder={props.parameter}
			/>
		</>
	);
}

export default LabelInput;
