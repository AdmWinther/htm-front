import React from "react";
import SidebarPlusPanel from "./C002_0_SidebarAndPanel";
import GetUserMainRoleFromLocalStorage from "../services/GetUserMainRoleFromLocalStorage";

const ProjectPanel = () => {
    let SidebarOptions = [];
    const userMainRole = GetUserMainRoleFromLocalStorage();

    //Decide the sidebar options based on the user's main role
    if(userMainRole.toLowerCase() === 'admin') {
        SidebarOptions = ['AllProjects'];
    } else if(userMainRole.toLowerCase() === 'superuser') {
        SidebarOptions = ['NewProject', 'AllProjects'];
    } else {
        console.log(`Error,  user type " ${userMainRole.toLowerCase()}" has projects as a tab in the Dashboard but the sidebar options are not stated`)
    }

    return (
        <SidebarPlusPanel SidebarOptions={SidebarOptions}/>
    );
}

export default ProjectPanel;