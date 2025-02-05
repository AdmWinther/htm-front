// import React, {useState} from "react";
// import PostRequestMaker from "../services/PostRequestMaker";

import { Button } from "bootstrap"

function RemovableItem({updateUrl, fieldProperties}) {

    let label = fieldProperties.Label()
    let value = fieldProperties.PlaceHolder()

    const handleClickDelete = ()=>{
        console.log("delete button clicked.")
    }

    return(
        <div>
            <Button>Delete</Button>
        </div>
    )
}

export default RemovableItem