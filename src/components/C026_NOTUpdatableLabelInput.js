import React, {useState, useEffect} from "react";
import PostRequestMaker from "../services/PostRequestMaker";
import FormFieldProperties from "../utils/FormFieldProperties";

function NOTUpdatableLabelInput({projectId, fieldProperties, updateUrl=null}) {
    
    
    return(
        <div>
            <div className="row align-items-center">
                <div className="col-2 form-label">
                    <label className="form-label" htmlFor="username">{fieldProperties.Label()}</label>
                </div>
                <div className="col-6 ">
                    <input className="form-control"
                        value={fieldProperties.PlaceHolder()}
                        readOnly={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default NOTUpdatableLabelInput