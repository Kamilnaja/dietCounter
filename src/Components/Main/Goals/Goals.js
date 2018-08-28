import React, { Component } from 'react';
import TabbedGoals from './TabbedGoals';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenItem: 'All'
        };
    }

    handleClick = (e) => {
        this.setState({
            choosenItem: e.target.dataset.name
        });
    }

    render() {
        return (
            <TabbedGoals items={['Permitted', 'All', 'Forbidden']}></TabbedGoals>
        );
    }
}

export default Goals;