import React from "react";
import { Link, Outlet } from "react-router-dom";

function MyUsersPanel() {
  return (
    <div className="container">
        <div class="row align-items-start">
            <div class="col-4">
                <ul className="nav nav-tab">
                    <div className="row">
                        <li className="nav-item">
                            <Link to="NewUser" className="nav-link active">New User</Link>
                        </li>
                    </div>
                    <div className="row">
                        <li>
                            <Link to="FindMyUser" className="nav-link active">Find User</Link>
                        </li>
                    </div>
                    <div className="row">
                        <li>
                            <Link to="AllMyUsers" className="nav-link active">Ass Users</Link>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="col-8">
                <Outlet/>
            </div>
        </div>
    </div>
  );
}

export default MyUsersPanel;