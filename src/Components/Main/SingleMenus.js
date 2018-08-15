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
                <li>
                    <Link
                        to={this.props.item.name}
                        onClick={(id) => this.props.handleClick(id)}
                        className={this.props.selected === this.props.id ? 'menuImage isSelected' : 'menuImage'}>
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