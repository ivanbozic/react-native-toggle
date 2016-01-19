/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Platform
} from 'react-native';

import Toggle from 'react-native-toggle';

class ToggleExample extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hidden: false
        };
    }

    toggle = () => {
        this.setState({
            hidden: !this.state.hidden
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    You can click the button below to hide or show the TextInput
                </Text>
                <Toggle hidden={this.state.hidden}>
                    <TextInput
                        style={[styles.textInput, Platform.OS === 'ios' && styles.textInputIOS]}
                        textAlign="center"
                    />
                </Toggle>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.toggle}
                    underlayColor="#aaa"
                >
                    <Text style={styles.buttonText}>{this.state.hidden ? 'Show' : 'Hide'} TextInput</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    textInput: {
        height: 25,
        width: 160,
        marginBottom: 10,
        backgroundColor: '#ccc',
        alignSelf: 'center',
        borderRadius: 5
    },
    textInputIOS: {
        textAlign: 'center'
    },
    button: {
        borderRadius: 4,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ccc',
        borderColor: '#333',
        borderWidth: 1
    },
    title: {
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 10
    },
    buttonText: {
        color: '#000'
    }
});
AppRegistry.registerComponent('ToggleExample', () => ToggleExample);
