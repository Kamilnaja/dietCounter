import React from 'react';
import tableWrapper from './../../../Utils/table/tableWrapper';
import PropTypes from 'prop-types';

const Forbidden = (props) => {
    return <div>{props.renderTable()}</div>;
};

Forbidden.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(Forbidden);