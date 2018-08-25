import React from 'react';

export default Component => {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = { active: 'All' };
        }

        renderTabsContent() {
            return (
                <div className="tabbedContent">
                    this is tab content
                </div>
            );
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
                    items={this.props.items}
                    // todo - add ... parameter
                    renderTabsContent={this.renderTabsContent}
                ></Component>
            );
        }
    };
};