import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SingleMenus extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        // this.className = 'menuImage';
    }

    componentWillReceiveProps() {
        // if (this.props.selected === this.props.id) {
        //     this.className += ' isSelected';
        // }
    }

    render() {

        return (
            <li className="menuTitle">
                <Link to={this.props.item}>
                    {this.props.item}
                </Link>
                <div
                    onClick={(id) => this.props.handleClick(id)}
                    className={this.props.selected === this.props.id ? 'menuImage isSelected' : 'menuImage'}>
                    {this.props.id}
                </div>
            </li>
        );
    }
}

SingleMenus.propTypes = {
    item: PropTypes.string,
    id: PropTypes.number,
    selected: PropTypes.number,
    handleClick: PropTypes.func
};

export default SingleMenus;