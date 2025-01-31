import React, {useState} from "react";


const MultipleSelect = (currentSelect)=>{
    const [selected,setSelected] = useState(currentSelect)
    let options = []
    selected.forEach(element => {
        options.push(<option>1</option>)
    });
    return(
        <div class="form-group">
            <label for="exampleFormControlSelect2">Example multiple select</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
    )

}

export default MultipleSelect;