import React, {useState} from "react";
import PostRequestMaker from "../services/PostRequestMaker";


function UpdatableLabelInput({fieldProperties, setStateFunction, theState, updateUrl}) {
    
    const [fieldValue, setFieldValue] = useState(fieldProperties.PlaceHolder())
    const [fieldReadOnly, setFieldReadOnly] = useState(true)
    const [update, setUpdate] = useState(true)
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false)
    const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(true)

    let field = fieldProperties.DataLayer();
    let label = fieldProperties.Label()

    const handleClickEdit = ()=>{
        setFieldReadOnly(false)
        setIsEditButtonDisabled(true)
        setIsConfirmButtonDisabled(false)
    }

    const handleClickConfirm = ()=>{
        PostRequestMaker(updateUrl, {"name": update}, false)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return true
        })
        setFieldReadOnly(true)
        setIsEditButtonDisabled(false)
        setIsConfirmButtonDisabled(true)
        console.log("new value is:", update)
    }

    return(
        <div key={field}>
            <div className="col-2 form-label">
                <label className="form-label" htmlFor="username">{label}</label>
            </div>
            <div className="row align-items-center">
                <div className="col-9 ">
                    <input className="form-control"
                        value={fieldValue}
                        readOnly={fieldReadOnly}
                        onChange={
                            e => {
                                setFieldValue(e.target.value)
                                setStateFunction({...theState, [field]: e.target.value});
                            }
                        }
                    />
                </div>                
                
                <div className="col-1">
                    <button 
                        className="btn btn-primary d-grid gap-2" 
                        onClick={handleClickEdit}
                        disabled={isEditButtonDisabled}
                        >
                        Edit
                    </button>
                </div>
                
                

                <div className="col-1">
                    <button 
                        className="btn btn-primary d-grid gap-2" 
                        onClick={handleClickConfirm}
                        disabled={isConfirmButtonDisabled}
                        >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdatableLabelInput