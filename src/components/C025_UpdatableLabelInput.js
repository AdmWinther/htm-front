import React, {useState} from "react";
import PostRequestMaker from "../services/PostRequestMaker";

function UpdatableLabelInput({updateUrl, fieldProperties}) {
    
    const [fieldValue, setFieldValue] = useState(fieldProperties.PlaceHolder())
    const [fieldReadOnly, setFieldReadOnly] = useState(true)
    const [update, setUpdate] = useState(true)
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false)
    const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(true)

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
        <div>
            <div className="row align-items-center">
                <div className="col-2 form-label">
                    <label className="form-label" htmlFor="username">{label}</label>
                </div>
                <div className="col-6 ">
                    <input className="form-control"
                        value={fieldValue}
                        readOnly={fieldReadOnly}
                        onChange={e => setUpdate(e.target.value)}
                    />
                </div>
                <div className="col-md-auto ">
                    <button 
                        className="btn btn-primary d-grid gap-2" 
                        onClick={handleClickEdit}
                        disabled={isEditButtonDisabled}
                        >
                        Edit
                    </button>
                </div>

                <div className="col-md-auto ">
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