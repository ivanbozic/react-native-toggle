import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View
} from 'react-native';

let viewPropTypes = View.propTypes;

class Toggle extends Component {
    static displayName = 'Toggle';
    static propTypes = {
        ...viewPropTypes,
        hidden: PropTypes.bool
    };

    static defaultProps = {
        hidden: false
    };

    constructor() {
        super(...arguments);
        this.state = {
            hasBeenSelected: !this.props.hidden
        };
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.hidden !== this.props.hidden && !this.state.hasBeenSelected) {
            this.setState({
                hasBeenSelected: true
            });
        }
    };

    shouldComponentUpdate = nextProps => {
        return !nextProps.hidden || nextProps.hidden !== this.props.hidden;
    };

    render() {
        return <RCTToggle {...this.props} />;
    }
}

let RCTToggle = requireNativeComponent('RCTToggle', Toggle);

export default Toggle;
