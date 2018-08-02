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
                <Link
                    to={this.props.item}
                    className={this.props.selected === this.props.id ? 'menuTitle' : 'menuTitle hide'}>
                    {this.props.item}
                </Link>
                <li>
                    <div
                        onClick={(id) => this.props.handleClick(id)}
                        className={this.props.selected === this.props.id ? 'menuImage isSelected' : 'menuImage'}>
                        {this.props.id}
                    </div>
                </li>
            </React.Fragment>
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