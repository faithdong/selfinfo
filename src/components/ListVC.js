/*
 * @Author: zhongxd 
 * @Date: 2018-03-30 10:28:14 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-30 17:09:30
 * 分类--小类列表
 */

 'use strict'

 import React from 'react';
 import {ScrollView,View,Text,FlatList,TouchableOpacity} from 'react-native';
 
 export default class ListVC extends React.Component{
     //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    constructor(props){
        super(props);
        this.state = {
            cgyList:[{name: '大护法'},
            {name: '绣春刀II：修罗战场'},
            {name: '神偷奶爸3'},
            {name: '神奇女侠'},
            {name: '摔跤吧，爸爸'},
            {name: '悟空传'},
            {name: '闪光少女'},
            {name: '攻壳机动队'},
            {name: '速度与激情8'},
            {name: '蝙蝠侠大战超人'},
            {name: '攻壳机动队'},
            {name: '速度与激情8'},
            {name: '蝙蝠侠大战超人'}]
        };
    };
    _renderItem = ({item, index}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            >
            <Text >{item.name}</Text>
          </TouchableOpacity>
        );
    }
    render(){
        return (
            <ScrollView>
                <View>
                    <FlatList data={this.state.cgyList}
                        renderItem={this._renderItem}>

                    </FlatList>
                </View>
            </ScrollView>
        )
        
    }

 }
