/*
 * @Author: zhongxd 
 * @Date: 2018-03-10 14:28:14 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-10 16:06:11
 * 新增
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity,
    ToastAndroid,
    SectionList,
    FlatList,
    RefreshControl,
    ScrollView,
    Button,
    Icon
} from 'react-native';
import EditView from './EditView';
import LoginButton from './LoginButton';

let homeImages = require('../images/icon_contacts_line_light.png');

export default class AddsVC extends React.Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
    };

    onPressCallback = () => {
        alert("AddsVS");
    };

    render() {
        return(
            <View style={LoginStyles.loginview}>
                <View style={{
                    flexDirection: 'row', height: 100, marginTop: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Image source={homeImages} />
                </View>
                <View style={{ marginTop: 80 }}>
                    <EditView name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }} />
                    <EditView name='输入密码' onChangeText={(text) => {
                        this.password = text;
                    }} />
                    <LoginButton name='登录' onPressCallback={this.onPressCallback} />
                    <Text style={{ color: "#4A90E2", textAlign: 'center', marginTop: 10 }} >忘记密码？</Text>
                </View>
            </View>
        )
    }
}


const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
});