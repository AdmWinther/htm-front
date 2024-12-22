class FormFieldProperties{
    //a class with 3 fields, dataLayerName, displayName, and placeHolder
    constructor(type, dataLayerName, label, placeHolder, optionsList=null) {
        
        let allowedTypes = ["LabelInput", "DropDownList"]
        if(allowedTypes.includes(type)){
            this.type = type;
        }else{
            throw new Error("Invalid Type")
        }
        
        this.dataLayerName = dataLayerName;
        this.label = label;
        this.placeHolder = placeHolder;
        this.optionsList = optionsList
    }

    Type(){
        return this.type
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