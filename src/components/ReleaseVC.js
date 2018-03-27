/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 15:38:44 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-27 16:33:34
 */




'use strict'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Button
} from 'react-native';
import CardView from 'react-native-cardview';
import Utils from './Utils';
let Dimensions = require('Dimensions');//获取屏幕的宽高
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

export default class ReleaseVC extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryList:[
                {
                    key:'efficiencyTools',
                    title:'效率工具类',
                    name:'效率工具'
                },
                {
                    key:'musicVideos',
                    title:'音乐视频类',
                    name:'音乐视频类'
                },
                {
                    key:'newPortals',
                    title:'新闻门户类',
                    name:'新闻门户类'
                },
                {
                    key:'onlineRetilers',
                    title:'电商O2O类',
                    name:'电商O2O类'
                },
                {
                    key:'banks',
                    title:'银行类',
                    name:'银行类'
                },
                {
                    key:'trafficTravels',
                    title:'交通出行类',
                    name:'交通出行类'
                },
                {
                    key:'communications',
                    title:'通讯营业厅',
                    name:'通讯营业厅'
                },
                {
                    key:'socialPays',
                    title:'社交支付类',
                    name:'社交支付类'
                },
                {
                    key:'readBooks',
                    title:'阅读书籍类',
                    name:'阅读书籍类'
                },
                {
                    key:'games',
                    title:'游戏类',
                    name:'游戏类'
                },
            ]
        }
    };
   
    static navigationOptions = {
        headerTitle: '测试页',
        tabBarLabel: '首页',
        tabBarIcon: <View style={{ height: 30, width: 30, backgroundColor: 'red' }}></View>
    };
    itemClick=(item)=>{
        console.log(item);
    };
    _renderItem=(item)=>{
        return (
            <TouchableOpacity onPress={() => {this.itemClick(item)}}>
                <View style={styles.viewRow}>
                    {/* <Button
                        title='learn more'
                        color={Utils.getColor()}
                        accessibilityLabel={item.key}
                        onPress={() => console.log(item.key)}/> */}
                    <CardView
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={5}>
                            <Text>
                                item.title
                            </Text>
                    </CardView>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList  data={this.state.categoryList}
                        renderItem={this._renderItem }
                        numColumns={3}>
                    </FlatList>
                </View>
            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    viewRow: {
        flexDirection: 'row',//设置横向布局 
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth / 3,
        padding: 10,
    },
});

