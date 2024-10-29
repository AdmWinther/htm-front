import React from "react";
import SortableFilterableTable from "./C015_Table";

function AllMyUsers() {
    const data = [
        ['Name', 'Age', 'Occupation'],
        ['Alice', 30, 'Engineer'],
        ['Bob', 25, 'Designer'],
        ['Charlie', 35, 'Teacher'],
        ['David', 28, 'Developer'],
        ['Alire', 30, 'Engiggneer'],
        ['Bobr', 25, 'Designgger'],
        ['Charrrlie', 35, 'Teachger'],
        ['Davird', 28, 'Devgeloper'],
        ['Alicge', 30, 'Engffineer'],
        ['Bobg', 25, 'Desigfner'],
        ['Chgarlie', 35, 'Teaffcher'],
        ['Davgid', 28, 'Developffer'],
    ];

    return (
        <div>
            <h1>This is All My Users component.</h1>
            <SortableFilterableTable data={data} />
        </div>
    );

}


export default AllMyUsers;