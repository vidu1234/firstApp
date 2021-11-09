import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.View}>
                <Text style={styles.text}>Hello world</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor : 'white',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 18
    }

})

export default App;