### react-native-root-toggle
---

A React Native component that allows you to use native property to `hide` or `show` children components inside:
When the component is hidden, its state will be retained in memory would not be released.

## Install

`npm install react-native-toggle@latest --save`

### iOS
In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name] Go to node_modules ➜ react-native-toggle ➜ ios and add the .xcodeproj file

In XCode, in the project navigator, select your project. Add the lib*.a from the RCTToggle project to your project's Build Phases ➜ Link Binary With Libraries Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for Header Search Paths and make sure it contains both $(SRCROOT)/../../node_modules/react-native/React and $(SRCROOT)/../../react-native/React - mark both as recursive.

Run your project (Cmd+R)

### Android

copy files under `./android` to `your project root path`

edit file `[your project's name]/android/app/src/main/java/com/[your package name]/MainActivity.java`

add

```java

...
import java.util.List;
import com.horcrux.toggle.*; // <------- import package

public class MainActivity extends ReactActivity {
...

```

```java
    ...
   /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),  // <------- add comma here
        new ToggleViewPackage() // <------- add package
      );
    }
    ...
```

## Props

Prop           | Type     | Default  | Description
-------------- | -------- | -------- | --------------------
hidden         | bool     | false    | Show/Hide the Toggle

## Usage

The Toggle component is an implementation for `visibility` style
```
{
    visibility: hidden // when hidden={true}
}
{
    visibility: visible // when hidden={false}
}
```

```
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput
} from 'react-native';

import Toggle from 'react-native-toggle'; // import Toggle

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
                        style={styles.textInput}
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
        borderRadius: 5,
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
```


## Run example

Just cd to `./Example` and run `npm install`
