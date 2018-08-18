import React from 'react';
import enhance from './../enhance';
import PropTypes from 'prop-types';

const Forbidden = (props) => {
    return <div>{props.renderTable()}</div>;
};

Forbidden.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default enhance(Forbidden);