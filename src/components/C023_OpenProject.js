import React from "react";
import { useParams } from 'react-router-dom';

function OpenProject({match}) {
    const { id } = useParams();
    console.log(id)
    return(
        <div>
            "ProjectID is {id}"
        </div>
    )
}

export default OpenProject