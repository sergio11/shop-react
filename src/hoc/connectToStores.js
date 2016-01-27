import React from "react";
import extend from 'extend';
import _ from 'mori';

export var connectToStores = Component => class extends React.Component {

    constructor(props) {
        super(props);
        this.subs = [];
        this.state = Component.getState();
    }

    componentDidMount() {
        for (let store of Component.getStores()) {
            this.subs.push(store.addListener(this.__onStoreChange.bind(this)));
        }
    }

    componentWillUnmount() {
        this.subs.forEach(s => s.remove());
    }

    __onStoreChange() {
        this.state = Component.getState();
        this.forceUpdate();
    }

    render() {
        let componentFactory = React.createFactory(Component);
        return componentFactory({
            'state': this.state
        });
    }
};

export default connectToStores;