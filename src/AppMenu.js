import React, { Component } from 'react';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';

class AppMenu extends Component {
    render() {
        return (
            <div className="wrapper">
                <ul>

                    {
                        MenuItems.map((item, id) =>
                            <li key={id}>
                                <Link key={id} to={item}>
                                    {item}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default AppMenu;