import React, { Component } from 'react';
import MenuItems from './menuItemsMain.json';
import SingleMenus from './SingleMenus';

class AppMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick(id) {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="headerWrapper">
                <div className="weightInfo">
                    <span>
                        Twoja waga: 125kg
                    </span>
                </div>
                <span>
                    {
                        MenuItems.items[this.state.selected].name
                    }
                </span>
                <ul className="menu">
                    {
                        MenuItems.items.map((item, id) =>
                            <SingleMenus
                                handleClick={this.handleClick.bind(this, id)}
                                key={id}
                                id={id}
                                item={item}
                                selected={this.state.selected}
                            ></SingleMenus>
                        )}
                </ul>
            </div>
        );
    }
}

export default AppMenu;