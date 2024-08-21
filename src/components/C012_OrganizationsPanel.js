import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./C002_0_SidebarAndPanel";

function OrganizationsPanel() {
    return (
        <div className="container-fluid">
            <div className="row align-items-start border border-5 rounded-3">
                <div className="col-2">
                    <Sidebar options={['NewOrganization', 'FindOrganization', 'AllOrganization']}/>
                </div>
                <div className="col-10">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default OrganizationsPanel;