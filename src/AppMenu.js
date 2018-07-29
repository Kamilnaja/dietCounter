import React, { Component } from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import MealsList from './MealsList';
import MenuItems from './MenuItems';
import { LinkContainer } from 'react-router-bootstrap';

class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {
                        MenuItems.map((item, id) =>
                            <LinkContainer to={item} key={id}>
                                <NavItem key={id} >
                                    {item}
                                </NavItem>
                            </LinkContainer>)
                    }
                </Nav>
            </Navbar>
        )
    }
}

export default AppMenu;

