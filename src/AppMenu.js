import React, { Component } from 'react';
import MenuItems from './MenuItems';
import SingleMenus from './SingleMenus';

class AppMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 2
        };
    }


    handleClick(id) {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="wrapper">
                <ul className="menu">
                    {
                        MenuItems.map((item, id) =>
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