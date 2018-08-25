import React from 'react';
import PropTypes from 'prop-types';
import tableWrapper from './../../../Utils/table/tableWrapper';

const Permitted = (props) => {
    return <div>{props.renderTable()}</div>;
};

Permitted.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(Permitted);