import React, { Component } from 'react';

class MealsMenu extends Component {

    render() {
        return (
            <ul className="categoryMenu">
                <li>
                    <a href="categories">
                        Categories
                    </a>
                </li>
                <li>
                    <a href="available">
                        You can eat
                    </a>
                </li>
                <li>
                    <a href="forbiden">
                        Forbidden
                    </a>
                </li>
            </ul>);
    }
}

export default MealsMenu;