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
    Icon,
    TextInput,
    Platform
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
        return (
            <View style={LoginStyles.loginview}>
                <View style={{
                    flexDirection: 'row', height: 100, marginTop: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Image source={homeImages} />
                </View>
                <View style={{ marginTop: 10 }}>
                   {/*  <EditView name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }} />
                    <EditView name='输入密码' onChangeText={(text) => {
                        this.password = text;
                    }} /> */}
                    <TextInput placeholder='输入用户名/注册手机号' style={LoginStyles.TextInput}></TextInput>
                    <TextInput placeholder='输入密码' style={LoginStyles.TextInput} secureTextEntry={true}></TextInput>
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
    TextInputView: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    TextInput: {
        backgroundColor: '#ffffff',
        height: 45,
        margin: 18,
        marginTop: Platform.OS === 'ios' ? 4 : 8,
    },
});