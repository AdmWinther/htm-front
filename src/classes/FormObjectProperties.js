import FormObjectTypes from "./FormObjectTypes";

class FormObjectProperties extends React.Component {
    constructor(name="FormObject", displayName="Form Object", defaultValue="", type=FormObjectTypes.LabelInput, placeholder="") {
        this.name = name;
        this.displayName = displayName;
        this.defaultValue = defaultValue;
        this.type = type;
        this.placeholder = placeholder;
        this.url = url;
    }
}

export default FormObjectProperties;
