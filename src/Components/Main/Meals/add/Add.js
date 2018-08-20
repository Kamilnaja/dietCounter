import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }
    componentDidMount() {
        fetch('http://localhost:8080/categories')
            .then(res => { return res.json(); })
            .then(res => {
                this.setState({
                    categories: res
                });
            });
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="kcal">Kcal</label>
                        <input type="text" id="kcal" />
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <select>
                            {this.state.categories.map((item, idx) => <option key={idx}>{item}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="info">Info</label>
                        <input type="text" id="info" />
                    </div>
                    <button onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        );
    }
}

export default Add;