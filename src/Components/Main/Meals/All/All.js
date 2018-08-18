import React from 'react';
import enhance from './../enhance';
import PropTypes from 'prop-types';

const All = (props) => {
    return <div>{props.renderTable()}</div>;
};

All.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default enhance(All);