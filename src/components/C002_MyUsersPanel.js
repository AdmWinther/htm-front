import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./C005_Sidebar";

function MyUsersPanel() {
    let SidebarOptions = ['NewUser', 'FindMyUser', 'AllMyUsers'];

    return (
        <div className="d-flex  flex-shrink-0">
            <div className="row flex-fill p-0 m-0">
                <div style={{backgroundColor: "cyan"}} className="col-2">
                    <Sidebar options={SidebarOptions}/>
                </div>
                <div className="col-10 border ">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default MyUsersPanel;