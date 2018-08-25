import React from 'react';
import PropTypes from 'prop-types';
import tableWrapper from './../../../Utils/table/tableWrapper';

const Categories = (props) => {
    return <div>{props.renderTable()}</div>;
};

Categories.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(Categories);