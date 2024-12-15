import React from "react"

function MakeTable({data, tableHeaders, handleClick = null}) {

    let tableheaderContent = tableHeaders.map(header => <th key={header} scope = "col">{header}</th>)
    let tableHeaderTag =(
        <thead>
            <tr>
                {tableheaderContent}
            </tr>
        </thead>
    )
    if(data[0]) {   //It will control if there is any data registered.

        //If there is a column in the data that stores "id", we do not want to show it to the user.
        //Therefore we use it from the column keys.
        let firstRowkeys = Object.keys(data[0]);
        let columnKeysWithoutId = firstRowkeys.filter((key) => {return(key !== 'id')})

        let rows = data.map((row, index) => {
            
            let rowContent = []
            rowContent.push(<th key="index" scope="col" >{index+1}</th>)
            
            columnKeysWithoutId.forEach(element => {
                rowContent.push(
                                <td key={element+row} onClick={()=>{
                                    handleClick(row.id)
                                }}>
                                    {row[element]}
                                </td>
                                )
            });
            
            return (
                <tr key={index}>
                    {rowContent}
                </tr>
            );
        });
    
        return(
            <div>
                <table className="table">
                    {tableHeaderTag}
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        ) 
    } else {
        return (
            <table className="table">
                {tableHeaderTag}
            </table>
        )
    }
}

export default MakeTable;