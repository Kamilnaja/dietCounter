import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ul>
                {
                    this.props.data.map(item => <li>{item}</li>)
                }
            </ul>
        );
    }
}

export default Menu;