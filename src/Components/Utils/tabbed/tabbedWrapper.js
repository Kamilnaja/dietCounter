import React from 'react';

export default Component => {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = { active: 'All' };
        }

        renderTabs() {
            return <ul className="tabbedMenu">
                {
                    this.items.map((item, idx) => (
                        <li
                            className={'tabbedMenuItem active' + (this.active === item)}
                            key={idx}
                            onClick={(e) => this.handleClick(e)}>
                            {item}
                        </li>
                    ))
                }
            </ul>;
        }

        handleClick(event) {
            event.preventDefault();
            this.setState({
                active: event.target.innerHTML
            });
        }

        render() {
            return (
                <Component
                    active={this.state.active}
                    handleClick={this.handleClick}
                    renderTabs={this.renderTabs}
                    {...this.props}
                ></Component>
            );
        }
    };
};