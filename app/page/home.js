/**
 * Created by miyaye on 2019/11/9.
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from '../navigator/BottomNavigator'
import NavigationUtil from '../utils/NavigationUtil'
class HomePage extends Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <BottomNavigator/>
    }
}

export default HomePage;