/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 14:23:54 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-02-01 14:25:14
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';

class ThreeScreen extends React.Component {
    static navigationOptions = {
        title: 'Three Sceen',
    };
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}
export default ThreeScreen;

