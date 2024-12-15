import React from "react";

const EditUser = ({updateUser, previousPage}) => {
    return(
        <div>
            <p>
                "this page is under construction"
            </p>
            <p>
                "Here we are going to display the infomration for user with id {updateUser} and give you the possebility to edit the user info and settings."
            </p>
            <p>
                "User ID is: {updateUser}."
            </p>
            <button onClick={()=> window.location.href = previousPage}>"Return"</button>
        </div>
    )

}

export default EditUser;