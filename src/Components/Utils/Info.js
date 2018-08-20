import React from 'react';
import { PropTypes } from 'prop-types';

export function Info(props) {
    return (
        <div className={props.type + '  info'}>
            <p>
                {props.children}
            </p>
        </div>
    );
}

Info.propTypes = {
    children: PropTypes.string,
    info: PropTypes.string
};