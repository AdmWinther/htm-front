const makeTable = (data, tableHeaders) => {
    let tableheaderContent = tableHeaders.map(header => <th key={header} scope = "col">{header}</th>)
    let tableHeaderTag =(
        <thead>
            <tr>
                {tableheaderContent}
            </tr>
        </thead>
    )
    if(data[0]) {

        const columnKeys = Object.keys(data[0])
        let rows = data.map((row, index) => {
            
            let rowContent = []
            rowContent.push(<th key="index" scope="col">{index+1}</th>)
            
            columnKeys.forEach(element => {
                rowContent.push(<td key={element+row} >{row[element]}</td>)
            });
            
            return (
                <tr key={index}>
                {rowContent}
            </tr>
        );
    });
    
    return(
        <table className="table">
        {tableHeaderTag}
        <tbody>
            {rows}
        </tbody>
        </table>
    ) 
    } else {
        return (
            <table className="table">
            {tableHeaderTag}
            </table>
    
        )
    }
}

export default makeTable;