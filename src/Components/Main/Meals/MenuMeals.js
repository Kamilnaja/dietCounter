import React, { Component } from 'react';
import MenuItemsMeals from './menuItemsMeals';

class MenuMeals extends Component {

    render() {
        return (
            <ul className="categoryMenu">
                {
                    MenuItemsMeals.items.map((item, id) =>
                        <li key={id} data-name={item.name} onClick={(e) => this.props.handleClick(e)}>
                            {item.name}
                        </li>)
                }
            </ul>);
    }
}

export default MenuMeals;