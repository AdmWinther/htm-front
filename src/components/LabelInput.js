function LabelInput(parameter, onChange) {
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
				type={
					props.parameter.toLowerCase() === "password"
						? "password"
						: "text"
				}
				id={props.parameter}
				className="form-control"
				placeholder={props.parameter}
			/>
		</>
	);
}

export default LabelInput;