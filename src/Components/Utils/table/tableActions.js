import React from 'react';
import { PropTypes } from 'prop-types';

const TableActions = (props) => {
    return (
        <td>
            <button onClick={props.handleEdit}>Edit</button>
            <button onClick={props.handleRemove} >Remove</button>
        </td>
    );
};

TableActions.propTypes = {
    handleRemove: PropTypes.func,
    handleEdit: PropTypes.func
};

export default TableActions;