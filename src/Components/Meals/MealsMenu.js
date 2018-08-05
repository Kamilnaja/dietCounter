import React, { Component } from 'react';
import MealsMenuItems from './MealsMenuItems';
import { Link } from 'react-router-dom';

class MealsMenu extends Component {

    render() {
        return (
            <ul className="categoryMenu">
                {
                    MealsMenuItems.items.map((item, id) =>
                        <li key={id}>
                            <Link to={item.name}>
                                {item.name}
                            </Link>
                        </li>)
                }
            </ul>);
    }
}

export default MealsMenu;