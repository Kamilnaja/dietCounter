import React from 'react';
import { PropTypes } from 'prop-types';

export function Info(props) {
    return <h1>{props.children}</h1>;
}

Info.propTypes = {
    children: PropTypes.string
};