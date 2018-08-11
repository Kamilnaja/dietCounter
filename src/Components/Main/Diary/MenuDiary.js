import React, { Component } from 'react';
import menuItemsDiary from './menuItemsDiary';
import { Link } from 'react-router-dom';

class MenuDiary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ul className="categoryMenu">
                {
                    menuItemsDiary.items.map((item, id) =>
                        <li key={id}>
                            <Link to={item.name}>
                                {item.name}
                            </Link>
                        </li>)
                }
            </ul>);

    }
}

export default MenuDiary;