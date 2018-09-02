import { PropTypes } from 'prop-types';
import React from 'react';
import tabbedWrapper from '../../Utils/tabbed/tabbedWrapper';
import All from './all/All';
import Forbidden from './forbidden/Forbidden';
import Permitted from './permitted/Permitted';
import mealsInputs from './mealsInputs.json';

const TabbedMeals = (props) => {
    return (
        <div className="tabbed">
            {props.renderTabs()}
            <div className="tabbedContent">
                {
                    props.active === 'All' && <All
                        url='product'
                        title="All items"
                        rows={['id', 'name', 'kcal', 'category']}
                        formInputs={mealsInputs}
                    ></All>
                }
                {
                    props.active === 'Forbidden' && <Forbidden
                        url='product/forbidden'
                        title="Forbidden items"
                        rows={['id', 'name', 'kcal', 'category']}></Forbidden>
                }
                {
                    props.active === 'Permitted' && <Permitted
                        url='product/permitted'
                        title="Permitted items"
                        rows={['id', 'name', 'kcal', 'category']}></Permitted>
                }
            </div>
        </div >
    );
};

TabbedMeals.propTypes = {
    active: PropTypes.string,
    items: PropTypes.array,
    renderTabs: PropTypes.func
};

export default tabbedWrapper(TabbedMeals);