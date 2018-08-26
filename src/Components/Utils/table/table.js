import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TableBodyRow from './tableBodyRow';

/**
 * This is table component, for <b>displaying</b> data.
 * 
 */

class Table extends Component {

    createRow(item) {
        return (
            this.props.rows.map((key, idx) => {
                return <td key={idx}>{item[key]}</td>;
            })
        );
    }

    createActions() {
        return (
            <td>
                <a href="">Edit</a>
                <a href="">Remove</a>
            </td>
        );
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <button onClick={this.props.expandAddingForm}>
                                +
                            </button>
                        </td>
                    </tr>
                    <tr>
                        {
                            this.props.headers.map((item, idx) => <td key={idx}>{item}</td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.length === 0 ? 'loading' :
                        this.props.data.map((item, idx) => (
                            <tr key={idx}>{
                                <TableBodyRow item={item} rows={this.props.rows}></TableBodyRow>
                            }
                                {this.createActions(item)}
                            </tr>
                        )
                        )}
                    {
                        this.props.showAddingForm && (
                            <tr>
                                <td>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        value={this.props.name}
                                        onChange={(e) => this.props.handleChange(e, 'name')} />
                                </td>
                                <td>
                                    <input type="text"
                                        placeholder="kcal"
                                        value={this.props.kcal}
                                        onChange={(e) => this.props.handleChange(e, 'kcal')} />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="category"
                                        value={this.props.category}
                                        onChange={(e) => this.props.handleChange(e, 'category')} />
                                </td>
                                <td>
                                    <button onClick={(e) => this.props.handleSubmit(e)}>
                                        Save
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array,
    headers: PropTypes.array,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    rows: PropTypes.array,
    expandAddingForm: PropTypes.func,
    showAddingForm: PropTypes.bool,
    name: PropTypes.string,
    kcal: PropTypes.number,
    category: PropTypes.string,
};

export default Table;