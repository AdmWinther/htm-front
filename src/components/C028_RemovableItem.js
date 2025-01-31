// import React, {useState} from "react";
// import PostRequestMaker from "../services/PostRequestMaker";

function RemovableItem({updateUrl, fieldProperties}) {

    let label = fieldProperties.Label()
    let value = fieldProperties.PlaceHolder()

    const handleClickDelete = ()=>{
        // PostRequestMaker(updateUrl, {"name": update}, false)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     return true
        // })
        console.log("delete button clicked.")
    }

    return(
        <div>
            <div className="row align-items-center">
                <div className="col-2 form-label">
                    <label className="form-label" htmlFor="username">{label}</label>
                </div>
                <div className="col-6 ">
                    <input className="form-control"
                        value={value}
                        readOnly={true}
                    />
                </div>

                <div className="col-md-auto ">
                    <button 
                        className="btn btn-primary d-grid gap-2" 
                        onClick={handleClickDelete}
                        >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RemovableItem