function LabelInput(props: { label: string }) {
  return (
    <label>
      {props.label}
      <input />
    </label>
  );
}

export default LabelInput;