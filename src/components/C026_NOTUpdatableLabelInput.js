import React from "react";

function NOTUpdatableLabelInput({fieldProperties}) {
    let field = fieldProperties.DataLayer();
    let display = fieldProperties.Label();
    let placeholder = fieldProperties.PlaceHolder();

    return(
        <div key={field}>
            <label 
                className="form-label" 
                htmlFor="username"
            >
                {display}
            </label>    
            <input
                key={field}
                type={
                    fieldProperties.DataLayer() === "Password" ? "password" : "text"
                }
                className="form-control"
                value={fieldProperties.PlaceHolder()}
                readOnly={true}
            />
        </div>
    )
}

export default NOTUpdatableLabelInput