class FormFieldProperties{
    //a class with 3 fields, dataLayerName, displayName, and placeHolder
    constructor(inputType, dataLayerName, label, placeHolder, optionsList=null) {
        
        let allowedInputTypes = ["LabelInput", "DropDownList"]
        if(allowedInputTypes.includes(inputType)){
            this.inputType = inputType;
        }else{
            throw new Error("Invalid inputType")
        }
        
        this.dataLayerName = dataLayerName;
        this.label = label;
        this.placeHolder = placeHolder;
        this.optionsList = optionsList
    }

    InputType(){
        return this.inputType
    }

    DataLayer(){
        return this.dataLayerName
    }
    Label(){
        return this.label
    }

    PlaceHolder(){
        return this.placeHolder
    }

    OptionsList(){
        return this.optionsList
    }
}

export default FormFieldProperties;