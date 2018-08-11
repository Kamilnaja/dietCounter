import React, { Component } from 'react';
import MenuItemsMeals from './menuItemsMeals';
import { Link } from 'react-router-dom';

class MenuMeals extends Component {

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
    }
}

export default MenuMeals;