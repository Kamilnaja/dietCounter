import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import MenuItems from './MenuItems';

class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar.Collapse>
                <Nav>
                    {
                        MenuItems.map((item, i) => <NavItem href={item} key={i}>{item}</NavItem>)
                    }
                </Nav>
            </Navbar.Collapse>);
    }
}

export default AppMenu;

