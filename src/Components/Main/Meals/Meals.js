import React, { Component } from 'react';
import TabbedMeals from './tabbedMeals';

class Meals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenItem: 'All'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            choosenItem: e.target.dataset.name
        });
    }

    render() {
        return (
            <TabbedMeals items={['Permitted', 'All', 'Forbidden']}></TabbedMeals>
        );
    }
}

export default Meals;