import React, { Component } from 'react';
import menuItemsDiary from './menuItemsDiary';

class DiaryMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ul className="categoryMenu">
                {
                    MenuItemsMeals.items.map((item, id) =>
                        <li key={id}>
                            <Link to={item.name}>
                                {item.name}
                            </Link>
                        </li>)
                }
            </ul>);
        );
    }
}

export default DiaryMenu;