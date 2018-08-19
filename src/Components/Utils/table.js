import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            {
                                this.props.headers.map((item, idx) => <td key={idx}>{item}</td>)
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.data.length === 0 ? 'loading' :
                            this.props.data.map((item, idx) => <tr key={idx}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.kcal}
                                </td>
                                <td>
                                    {item.category || 'unknown'}
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
                <div className="productInfo">Product info</div>
            </React.Fragment>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array,
    headers: PropTypes.array,
};

export default Table;