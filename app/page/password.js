
import React, {Component} from 'react';
import { Text, View } from 'react-native';


class Password extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:26}} onPress={() => this.props.navigation.navigate('Home')}>Password!</Text>
            </View>
        );
    }
}

export default Password;