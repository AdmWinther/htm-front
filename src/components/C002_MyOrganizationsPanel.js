import React from "react";
import SidebarPlusPanel from "./C002_0_SidebarPlusPanel";

function MyUsersPanel() {
    let SidebarOptions = ['NewOrganization', 'FindOrganization', 'AllOrganizations'];

    return (
        <SidebarPlusPanel SidebarOptions={SidebarOptions}/>
    );
}

export default MyUsersPanel;