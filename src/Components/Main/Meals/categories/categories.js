import React from 'react';
import tableWrapper from './../tableWrapper';
import PropTypes from 'prop-types';

const Categories = (props) => {
    return <div>{props.renderTable()}</div>;
};

Categories.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default tableWrapper(Categories);