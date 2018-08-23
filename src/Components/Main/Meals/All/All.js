import React from 'react';
import tableWrapper from './../tableWrapper';
import PropTypes from 'prop-types';

const All = (props) => {
    return (<div>{props.renderTable()}</div>);
};

All.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(All);