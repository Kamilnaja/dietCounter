import React, { Component } from 'react';
import menuItemsDiary from './menuItemsDiary';

class MenuDiary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul className="categoryMenu">
                {
                    menuItemsDiary.items.map((item) =>
                        <li key={item.name} data-name={item.name} onClick={(e) => this.props.handleClick(e)} >
                            {item.name}
                        </li>)
                }
            </ul>);
    }
}

export default MenuDiary;