import React from 'react';
import tabbedWrapper from '../../Utils/tabbed/tabbedWrapper';
import { PropTypes } from 'prop-types';

const TabbedMeals = (props) => {
    return (
        <div className="tabbed">
            <ul className="tabbedMenu">
                {
                    props.items.map((item, idx) => (
                        <li
                            className={'tabbedMenuItem active' + (props.active === item)}
                            key={idx}
                            onClick={(e) => props.handleClick(e)}>
                            {item}
                        </li>
                    ))
                }
            </ul>
            {props.renderTabsContent()}
        </div>
    );
};

TabbedMeals.propTypes = {
    renderTabs: PropTypes.func.isRequired,
    renderTabsContent: PropTypes.func.isRequired,
    active: PropTypes.bool,
    items: PropTypes.array
};

export default tabbedWrapper(TabbedMeals);