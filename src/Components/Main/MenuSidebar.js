import React, { Component } from 'react';
import MenuItems from './menuItemsMain.json';
import SingleMenus from './SingleMenus';

class MenuSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (id) => {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <ul className="menuSidebar">
                {
                    MenuItems.items.map((item, id) =>
                        <SingleMenus
                            handleClick={() => this.handleClick(this, id)}
                            key={id}
                            id={id}
                            item={item}
                            selected={this.state.selected}
                        ></SingleMenus>
                    )
                }
            </ul>
        );
    }
}

export default MenuSidebar;