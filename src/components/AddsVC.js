/*
 * @Author: zhongxd 
 * @Date: 2018-03-10 14:28:14 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-16 17:53:29
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
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import EditView from './EditView';
import LoginButton from './LoginButton';
import RealmDB from './RealmDB';
import CryptoJS from 'crypto-js';
import Utils from './Utils';

let homeImages = require('../images/icon_contacts_line_light.png');


export default class AddsVC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account_name:'',//应用名称、网站名称
            login_name_one:'',//第一登录名
            login_name_two:'',//第二登录名
            login_pwd:''//登录密码
        }
        
    };
    
    saveData = () =>{
        console.log(this.state.account_name);
        console.log(this.state.login_name_one);
        console.log(this.state.login_name_two);
        console.log(this.state.login_pwd);
        // Encrypt
        let encryptLoginPwd = CryptoJS.AES.encrypt(this.state.login_pwd, 'secret key zhongxd');
        let login_pwd = encryptLoginPwd.toString();
        RealmDB.write(()=>{
            RealmDB.create(
                'AccountInfo',
                {
                    id:Utils.UUID(),
                    account_name:this.state.account_name,
                    login_name_one:this.state.login_name_one,
                    login_name_two:this.state.login_name_two,
                    login_pwd:login_pwd
                }
            );
            
        })
    };
    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
                <ScrollView>
                    <View style={LoginStyles.loginview}>
                        <View style={{
                            flexDirection: 'row', height: 80, marginTop: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}>
                            <Image source={homeImages} />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            {/*  <EditView name='输入用户名/注册手机号' onChangeText={(text) => {
                                    this.userName = text;
                                }} />
                                <EditView name='输入密码' onChangeText={(text) => {
                                    this.password = text;
                                }} /> */}
                                <TextInput placeholder='输入应用名称/网站名称' 
                                    style={LoginStyles.TextInput} 
                                    onChangeText={(account_name) => this.setState({account_name})}  
                                    value={this.state.account_name} >
                                </TextInput>
                                <TextInput placeholder='输入第一登录账号' 
                                    style={LoginStyles.TextInput}
                                    onChangeText={(login_name_one) => this.setState({login_name_one})}  
                                    value={this.state.login_name_one}>
                                </TextInput>
                                <TextInput placeholder='输入第二登录账号' 
                                    style={LoginStyles.TextInput}
                                    onChangeText={(login_name_two) => this.setState({login_name_two})}  
                                    value={this.state.login_name_two}>
                                </TextInput>
                                <TextInput placeholder='输入密码' 
                                    style={LoginStyles.TextInput} 
                                    secureTextEntry={true}
                                    onChangeText={(login_pwd) => this.setState({login_pwd})}  
                                    value={this.state.login_pwd}>
                                </TextInput>
                                {/*  <LoginButton name='登录' onPressCallback={this.onPressCallback} /> */}
                                <TouchableOpacity  style={LoginStyles.loginTextView} 
                                    onPress={this.saveData}>
                                    <Text style={LoginStyles.loginText} >
                                        保存  
                                    </Text>
                                </TouchableOpacity>
                            <Text style={{ color: "#4A90E2",  marginTop: 10 }} >提示：数据只保存到手机本地，不会访问网络</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            
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
    loginText: {
        color: '#ffffff',
         fontWeight: 'bold',
         width:30,
      },
      loginTextView: {
        marginTop: 10,
        height:50,
        backgroundColor: '#3281DD',
        borderRadius:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
      },
});