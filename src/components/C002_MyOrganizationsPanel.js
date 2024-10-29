import React from "react";
import SidebarPlusPanel from "./C002_0_SidebarAndPanel";

function MyUsersPanel() {
    let SidebarOptions = ['NewOrganization', 'AllOrganizations'];

    return (
        <SidebarPlusPanel SidebarOptions={SidebarOptions}/>
    );
}

export default MyUsersPanel;