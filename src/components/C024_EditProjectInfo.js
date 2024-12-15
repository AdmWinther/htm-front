import React, {useEffect, useState} from "react";
import GetRequestMaker from "../services/GetRequestMaker";

function EditProjectInfo({projectId, previousPage}) {
    const [alaki, setAlaki] = useState()
    useEffect(
        ()=>{
            let url = process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ENDPOINT_GET_PROJECT_INFO+projectId
            GetRequestMaker(url)
            .then(response => response.json())
            .then(data => {
                setAlaki("nothing")
            })
            
        },
        []
    )
    return(
        <div>
            <p>
                "this page is under construction"
            </p>
            <p>
                "Display the infomration for project {projectId} + the possebility to edit it.nothing is {alaki}"
            </p>
            <p>
                "PROJECT ID is: {projectId}."
            </p>
            <button onClick={()=> window.location.href = previousPage}>"Return"</button>
        </div>
    )

}


export default EditProjectInfo;