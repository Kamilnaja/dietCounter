import { PropTypes } from 'prop-types';
import React from 'react';
import tabbedWrapper from '../../Utils/tabbed/tabbedWrapper';
import All from './all/All';
import Forbidden from './forbidden/Forbidden';
import Permitted from './permitted/Permitted';

const TabbedMeals = (props) => {
    return (
        <div className="tabbed">
            {props.renderTabs()}
            <div className="tabbedContent">
                {
                    props.active === 'All' && <All url='all' title="All items"></All>
                }
                {
                    props.active === 'Forbidden' && <Forbidden url='forbidden' title="Forbidden items"></Forbidden>
                }
                {
                    props.active === 'Permitted' && <Permitted url='permitted' title="Permitted items"></Permitted>
                }
            </div>
        </div>
    );
};

TabbedMeals.propTypes = {
    active: PropTypes.string,
    items: PropTypes.array,
    renderTabs: PropTypes.func
};

export default tabbedWrapper(TabbedMeals);