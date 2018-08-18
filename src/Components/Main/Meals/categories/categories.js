import React from 'react';
import enhance from './../enhance';
import PropTypes from 'prop-types';

const Categories = (props) => {
    return <div>{props.renderTable()}</div>;
};

Categories.propTypes = {
    renderTable: PropTypes.func.isRequired
};

export default enhance(Categories);