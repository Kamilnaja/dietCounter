import React from 'react';
import tabbedWrapper from '../../Utils/tabbedWrapper';
import { PropTypes } from 'prop-types';

const TabbedMeals = (props) => {
    return (
        <div className="tabbed">
            {props.renderTabs()}
            {props.renderTabsContent()}
        </div>
    );
};

TabbedMeals.propTypes = {
    renderTabs: PropTypes.func.isRequired,
    renderTabsContent: PropTypes.func.isRequired
};

export default tabbedWrapper(TabbedMeals);