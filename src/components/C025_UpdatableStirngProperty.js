import React, {useState, useEffect} from "react";
import PostRequestMaker from "../services/PostRequestMaker";

const UpdatableStringField = ({projectId, requestUrl, updateUrl, label, dataLayerLabel}) => {
    
    const [fieldValue, setFieldValue] = useState('')
    const [fieldReadOnly, setFieldReadOnly] = useState(true)
    const [update, setUpdate] = useState(true)
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false)
    const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(true)
    
    useEffect(
        ()=>{
            PostRequestMaker(requestUrl, {"prop":"name", "projectId": projectId}, false)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFieldValue(data)
                setUpdate(data)
                return true
            })
        },[]
    )

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
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <label className="form-label" htmlFor="username">{label}</label>
                </div>
                <div className="col-6">
                    <input className="form-control"
                        value={update}
                        readOnly={fieldReadOnly}
                        onChange={e => setUpdate(e.target.value)}
                    />
                </div>
                <div className="col">
                    <button 
                        className="btn btn-primary" 
                        onClick={handleClickEdit}
                        disabled={isEditButtonDisabled}
                        >
                        Edit
                    </button>
                </div>

                <div className="col">
                    <button 
                        className="btn btn-primary" 
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

export default UpdatableStringField