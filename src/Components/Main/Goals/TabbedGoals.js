import { PropTypes } from 'prop-types';
import React from 'react';
import tabbedWrapper from '../../Utils/tabbed/tabbedWrapper';
import All from './all/All';
import Forbidden from './forbidden/Forbidden';
import Permitted from './permitted/Permitted';

const TabbedGoals = (props) => {
    return (
        <div className="tabbed">
            {props.renderTabs()}
            <div className="tabbedContent">
                {
                    props.active === 'All' && <All
                        url='all'
                        title="All items"
                        rows={['id', 'name', 'kcal', 'category']}></All>
                }
                {
                    props.active === 'Forbidden' && <Forbidden
                        url='forbidden'
                        title="Forbidden items"
                        rows={['id', 'name', 'kcal', 'category']}></Forbidden>
                }
                {
                    props.active === 'Permitted' && <Permitted
                        url='permitted'
                        title="Permitted items"
                        rows={['id', 'name', 'kcal', 'category']}></Permitted>
                }
            </div>
        </div >
    );
};

TabbedGoals.propTypes = {
    active: PropTypes.string,
    items: PropTypes.array,
    renderTabs: PropTypes.func
};

export default tabbedWrapper(TabbedGoals);