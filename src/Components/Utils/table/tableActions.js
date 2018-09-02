import React from 'react';
import { PropTypes } from 'prop-types';

const TableActions = (props) => {
    return (
        <td id={props.item._id}>
            <button id={props.item._id} onClick={(e) => props.handleEdit(e)}>Edit</button>
            <button onClick={props.handleRemove} >Remove</button>
        </td >
    );
};

TableActions.propTypes = {
    handleRemove: PropTypes.func,
    handleEdit: PropTypes.func
};

export default TableActions;