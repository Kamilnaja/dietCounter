import React, { Component } from 'react';
import TabbedGoals from './tabbedGoals';

class Goals extends Component {

    handleClick = (e) => {
        this.setState({
            choosenItem: e.target.dataset.name
        });
    }

    render() {
        return (
            <TabbedGoals
                items={['Current', 'New', 'Old', 'All']}
            ></TabbedGoals >
        );
    }
}

export default Goals;