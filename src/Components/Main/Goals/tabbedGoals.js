import React from 'react';
import tabbedWrapper from '../../Utils/tabbed/tabbedWrapper';
import { PropTypes } from 'prop-types';
import GoalsCurrent from './current/GoalsCurrent';
import GoalsNew from './new/GoalsNew';
import goalsInputs from './goalsInputs.json';

const TabbedGoals = (props) => {
    return (
        <div className="tabbed">
            {props.renderTabs()}
            <div className="tabbedContent">
                {
                    props.active === 'Current' &&
                    <GoalsCurrent
                        url='goals' // todo - change this
                        title='Current Goals'
                        rows={['id', 'name', 'content']}
                        {...this.props}
                        formInputs={goalsInputs}
                    ></GoalsCurrent>
                }
                {
                    props.active === 'New' && <GoalsNew></GoalsNew>
                }
            </div>
        </div>
    );
};

TabbedGoals.propTypes = {
    renderTabs: PropTypes.func,
    active: PropTypes.string
};

export default tabbedWrapper(TabbedGoals);