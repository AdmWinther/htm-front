//This component makes a page with the following format:
// 1. a sidebar at the left
// 2. a main section that will be filled with the content of the selected option
// ---------------
//| Si|    Pa     |
//| eb|    ne     |
//| r |    l      |
//|   |           |
//|   |    (O     |
//|   |    ut     |
//|   |    le     |
//|   |    t)     |
//|   |           |
//|   |           |
//----------------



import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./C005_Sidebar";

function SidebarPlusPanel({SidebarOptions}) {

    return (
        <div className="d-flex  flex-shrink-0">
            <div className="row flex-fill p-0 m-0">
                <div style={{backgroundColor: "cyan"}} className="col-2 border border-primary rounded-3">
                    <Sidebar options={SidebarOptions}/>
                </div>
                <div className="col-10 border border-danger rounded-3">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default SidebarPlusPanel;