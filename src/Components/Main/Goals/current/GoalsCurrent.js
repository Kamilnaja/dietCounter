import React from 'react';
import { PropTypes } from 'prop-types';
import tableWrapper from './../../../Utils/table/tableWrapper';

const GoalsCurrent = (props) => {
    return (
        <div>{props.renderTable()}</div>
    );
};

GoalsCurrent.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(GoalsCurrent);