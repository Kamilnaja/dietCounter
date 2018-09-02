import React from 'react';

function TableBodyRow(props) {
    return (props.rows.map((key, idx) => {
        if (idx === 0) {
            return (
                <td key={idx} className="numberColumn">
                    {props.item[key]}
                </td>
            );
        }
        return (
            <td key={idx}>
                {props.item[key]}
            </td>
        );
    }));
}

export default TableBodyRow;