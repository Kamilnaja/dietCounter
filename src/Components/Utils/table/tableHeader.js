import React from 'react';
import { PropTypes } from 'prop-types';

const TableHeader = props => {
    return (
        <thead>
            <tr>
                <td>
                    <button onClick={props.expandAddingForm}> + </button>
                </td>
            </tr>
            <tr>
                {
                    props.rows.map((item, idx) => (
                        <td key={idx}>
                            {item}
                        </td>
                    ))
                }
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    rows: PropTypes.array,
    expandAddingForm: PropTypes.func
};

export default TableHeader;