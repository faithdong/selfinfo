/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 15:37:54 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-01 23:52:51
 */

import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation"
export default class FindVC extends Component {
    static navigationOptions = {
        headerTitle: '发现',
        tabBarLabel: '发现',
        tabBarIcon: <View style={{ height: 30, width: 30, backgroundColor: 'red' }}></View>
    };
    componentDidMount() {
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
        console.log(ciphertext);
        // Decrypt
        var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        alert("解密后：" + plaintext);
        console.log(plaintext);
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

