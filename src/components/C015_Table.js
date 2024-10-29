import React, { useState } from 'react';

const SortableFilterableTable = ({ data }) => {
    const [sortConfig, setSortConfig] = useState({ key: 0, direction: 'ascending' });
    const [filters, setFilters] = useState(Array(data[0].length).fill(''));

    const flipSortDirection = (columnIndex) => {
        let direction = 'ascending';
        if (sortConfig.key === columnIndex && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key: columnIndex, direction: direction });
    };

    const handleFilterChange = (columnIndex, value) => {
        const newFilters = [...filters];
        newFilters[columnIndex] = value;
        setFilters(newFilters);
    };

    const sortedData = React.useMemo(() => {
        if (sortConfig.key !== null) {
            return [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    }, [data, sortConfig]);

    const filteredData = sortedData.filter(row =>
        row.every((cell, index) => cell.toString().toLowerCase().includes(filters[index].toLowerCase()))
    );

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {data[0].map((header, index) => (
                            <th key={index} onClick={() => flipSortDirection(index)}>
                                {header}
                                {sortConfig.key === index ? (
                                    sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽'
                                ) : null}
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {data[0].map((_, index) => (
                            <th key={index}>
                                <input
                                    type="text"
                                    placeholder={`Filter ${data[0][index]}`}
                                    value={filters[index]}
                                    onChange={(e) => handleFilterChange(index, e.target.value)}
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SortableFilterableTable;