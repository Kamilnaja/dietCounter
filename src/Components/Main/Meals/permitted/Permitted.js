import React from 'react';
import tableWrapper from './../tableWrapper';
import PropTypes from 'prop-types';

const Permitted = (props) => {
    return <div>{props.renderTable()}</div>;
};

Permitted.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(Permitted);