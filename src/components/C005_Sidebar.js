import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({options}) => {
    console.log(options);

    let buttons = options.map((element) => {
        return (
            <div className="row align-items-end">
                <Link to={element} className="nav-link active">{element}</Link>
            </div>
        )
    })

    return (
        <div className="container">
            {buttons}           
        </div>








    );
}

export default Sidebar;