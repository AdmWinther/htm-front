import React, {useState} from "react";


function UpdatableLabelInput({
                                fieldProperties,
                                setStateFunction, 
                                theState, 
                                isFormDisabled,
                                updatableLabelInputIsConfiremed,
                                setUpdatableLabelInputIsConfiremed
                            }) {

    // let kabab = fieldProperties.PlaceHolder()
    
    const [fieldValue, setFieldValue] = useState(fieldProperties.PlaceHolder())
    const [fieldReadOnly, setFieldReadOnly] = useState(true)
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false)
    const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(true)

    let field = fieldProperties.DataLayer();
    let label = fieldProperties.Label()

    const handleClickEdit = ()=>{
        //console.log("remember, the state is:", theState)
        isFormDisabled(true)
        setFieldReadOnly(false)
        setIsEditButtonDisabled(true)
        setIsConfirmButtonDisabled(false)
        setUpdatableLabelInputIsConfiremed({...updatableLabelInputIsConfiremed, [fieldProperties.DataLayer()]: false})
    }

    const handleClickConfirm = ()=>{
        //We need to trim after CONFIRM to make sure all excess blanks at the end are removed.
        setFieldValue(fieldValue.trim())
        setStateFunction({...theState, [fieldProperties.DataLayer()]:fieldValue.trim()})
        isFormDisabled(false)
        setFieldReadOnly(true)
        setIsEditButtonDisabled(false)
        setIsConfirmButtonDisabled(true)
        setUpdatableLabelInputIsConfiremed({...updatableLabelInputIsConfiremed, [fieldProperties.DataLayer()]: true})
    }

    return(
        <div key={field}>
            <div className="col-12 form-label">
                <label className="form-label" htmlFor="username">{label}</label>
            </div>
            <div className="row align-items-center">
                <div className="col-9 ">
                    <input className="form-control"
                        value={fieldValue}
                        readOnly={fieldReadOnly}
                        onChange={
                            e => {
                                // remove the blanks from the end of the entered value
                                setFieldValue(e.target.value)
                                // kabab = e.target.value
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