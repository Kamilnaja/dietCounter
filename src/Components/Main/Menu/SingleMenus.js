import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SingleMenus extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <li className={this.props.selected === this.props.id ? 'menuSidebar_item isSelected' : 'menuSidebar_item'}
                >
                    <Link
                        id={this.props.id}
                        to={this.props.item.name}
                        onClick={() => this.props.handleClick(this.props.id)}
                        className='menuSidebar_link'>
                        {this.props.item.name}
                    </Link>
                </li>
            </React.Fragment>
        );
    }
}

SingleMenus.propTypes = {
    item: PropTypes.object,
    id: PropTypes.number,
    selected: PropTypes.number,
    handleClick: PropTypes.func
};

export default SingleMenus;