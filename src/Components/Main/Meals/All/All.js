import React from 'react';
import PropTypes from 'prop-types';
import tableWrapper from './../../../Utils/table/tableWrapper';

const All = (props) => {
    return (<div>{props.renderTable()}</div>);
};

All.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(All);