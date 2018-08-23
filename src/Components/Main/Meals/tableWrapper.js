import React from 'react';
import Table from './../../Utils/table';
import tableHeaders from './../../../MealsTableHeaders';
import { Info } from './../../Utils/Info';

export default Component => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                items: []
            };
            this.renderTable = this.renderTable.bind(this);
        }

        componentDidMount() {
            fetch(`http://localhost:8080/${this.props.url}`)
                .then(res => { return res.json(); })
                .then(result => {
                    this.setState({
                        items: result
                    });
                }, error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
        }

        renderTable() {
            return (
                <div className="tableWrapper">
                    {
                        this.state.items.length === 0 ? 'Loading'
                            : <Table
                                headers={tableHeaders}
                                data={this.state.items} >
                            </Table>
                    }
                </div>
            );
        }

        render() {
            const { error } = this.state;
            if (error) {
                return (
                    <Info type="error">
                        Error when connecting with api
                </Info>
                );
            } else {
                return <Component renderTable={this.renderTable}></Component>;
            }
        }
    };
};