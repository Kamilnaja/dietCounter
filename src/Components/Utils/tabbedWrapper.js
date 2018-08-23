import React from 'react';

export default Component => {
    return class extends React.Component {
        renderTabsContent() {
            return (
                <div className="tabbedContent">
                    this is tab content
                </div>
            );
        }

        renderTabs() {
            return (
                <ul className="tabbedMenu">
                    {
                        this.items.map((item, idx) => (
                            <li
                                // className={'tabbedMenuItem active' + (this.state.active === item)}
                                className="tabbedMenuItem"
                                key={idx}
                                onClick={(e) => this.handleClick(e)}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            );
        }

        render() {
            return (
                <Component
                    renderTabs={this.renderTabs}
                    items={this.props.items}
                    // todo - add ... parameter
                    renderTabsContent={this.renderTabsContent}
                ></Component>
            );
        }
    };
};