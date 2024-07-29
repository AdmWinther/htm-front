import React from "react";
import { Link } from "react-router-dom";


function makeUlLi(list){
    return (
        <ul className="nav nav-tab">
            {list.map((item, index) => (
                <li className="nav-item" key={index+item}>
                    <Link to={item.link} className="nav-link active">{item.text}</Link>
                </li>
            ))}
        </ul>
    );
}