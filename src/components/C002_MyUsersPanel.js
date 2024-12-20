import React from "react";
import SidebarPlusPanel from "./C002_0_SidebarAndPanel";
import GetUserMainRoleFromLocalStorage from "../services/GetUserMainRoleFromLocalStorage";

const MyUsersPanel = () => {
    let SidebarOptions = [];
    const userMainRole = GetUserMainRoleFromLocalStorage();

    //Decide the sidebar options based on the user's main role
    if(userMainRole.toLowerCase() === 'admin') {
        SidebarOptions = ['AllUsers'];
    } else if(userMainRole.toLowerCase() === 'superuser') {
        SidebarOptions = ['NewUser', 'AllUsers'];
    } else {
        console.log("Error, new user type has users as a tab in the Dashboard but the sidebar options are not stated")
    }

    return (
        <SidebarPlusPanel SidebarOptions={SidebarOptions}/>
    );
}

export default MyUsersPanel;