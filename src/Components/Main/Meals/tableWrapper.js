import React from 'react';
import Table from './../../Utils/table';
import tableHeaders from './../../../MealsTableHeaders';

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
                .then(myJson => {
                    this.setState({
                        items: myJson
                    });
                });
        }

        renderTable() {
            return (
                <div>
                    {
                        this.state.items.length === 0 ? 'Loading'
                            : <Table headers={tableHeaders} data={this.state.items}></Table>
                    }
                </div>
            );
        }
        render() {
            return <Component renderTable={this.renderTable}></Component>;
        }
    };
};