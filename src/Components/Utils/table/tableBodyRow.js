import React from 'react';

function TableBodyRow(props) {
    return (props.rows.map((key, idx) => {
        return <td key={idx}>{props.item[key]}</td>;
    }));
}

export default TableBodyRow;