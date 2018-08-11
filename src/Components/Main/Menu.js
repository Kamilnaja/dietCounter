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
                    this.props.data.map((item, idx) => <Link to={'/' + item} key={idx}>{item}</Link>)
                }
            </ul>
        );
    }
}

export default Menu;