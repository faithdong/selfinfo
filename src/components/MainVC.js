/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 15:37:11 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-05 23:39:55
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
    ScrollView
} from 'react-native';
import Images from '../images/ImageList'


let Dimensions = require('Dimensions');//获取屏幕的宽高
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
let homeImages = require('../images/icon_contacts_line_light.png');


export default class MainVC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sectListDataSource_row: [
                {
                    key: "A",
                    title:'办公',
                    data: [{ name: '外勤签到', img: Images.oaWQQD,key:1},{ name: '外勤签到', img: Images.oaWQQD,key:2},{ name: '外勤签到', img: Images.oaWQQD,key:3}]
                },
                {
                    key: "C",
                    title:'营销',
                    data: [{ name: '考勤打卡', img: Images.oaKQDK,key:4}]

                },
            ],
            isLoading: true,
        }
    }

    componentDidMount() {
        console.log("Component挂载完毕后调用");
    }

    static navigationOptions = {
        headerTitle: '首页',//对页面的配置
        headerTintColor: '#393939',
        headerTitleStyle: {
            alignSelf: 'center'
        },
        tabBarLabel: '首页',
        tabBarIcon: <Image source={homeImages} />
    };
    itemClick=(item) =>{
        debugger;
        console.log(item);
    };
     _renderSectionHeader = ({ section }) => (
        <View>
            <Text style={styles.viewItemHeader}>{section.title}</Text>
            <FlatList
                data={section.data}
                style={styles.flastList}
                numColumns={4}
                renderItem={({ item }) =>
                 <TouchableOpacity onPress={() => {this.itemClick(item)}}>
                     <View style={styles.viewRow}>  
                         <Image source={item.img} style={styles.imageItem} />
                         <Text style={styles.textItem}>{item.name}</Text>
                     </View>
                 </TouchableOpacity>}
            />
        </View>
    ); 
    _renderItem = ({ info }) => null;

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={{ height: 60, backgroundColor: 'orange', justifyContent: 'center', }}
                        onPress={() => navigate('DetailVC', { title: '详情', des: '我是返回点击我' })} >
                        <Text>点击进详情页</Text>
                    </TouchableOpacity>
                    {/* <Image source={homeImages}></Image> */}
                    <SectionList
                        //style={styles.background}
                        //sections={sections}
                        //renderSectionHeader={this._sectionComp}
                        renderSectionHeader={this._renderSectionHeader}
                        renderItem={this._renderItem}
                        //sections={this.state.sectListDataSource} 
                        sections={this.state.sectListDataSource_row}
                        //refreshing={this.state.isLoading}
                        //ItemSeparatorComponent={() => <View><Text></Text></View>}
                        //contentContainerStyle={styles.list}
                        /* onRefresh={this.onRefresh.bind(this)} */
                        //keyExtractor={(item, index) => { item.name }}
                        //ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}  
                        //ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}  
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    navigatorStyle: {
        height: 64,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 33.5,
        fontSize: 17,
        fontWeight: '600',
    },
    list: {
        //justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
    row: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        width: (ScreenWidth - 1) / 4,
        height: (ScreenWidth - 1) / 4,
        alignItems: 'center',
        // borderWidth: 0.5,
        // borderRadius: 5,
        // borderColor: '#E6E6E6'
    },
    sectionHeader: {
        marginLeft: 10,
        padding: 6.5,
        fontSize: 12,
        color: '#787878'
    },
    remark: {
        margin: 10,
        fontSize: 10,
        color: '#D2D2D2',
        marginBottom: 10,
        alignSelf: 'center',
    },
    viewItemHeader: {
        flex: 1,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
   
    viewRow: {
        // flexDirection: 'row',//设置横向布局 
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth / 4,
        padding: 10,
    },
   
    imageItem: {
        height: 40,
        width: 40,
    },
   
    textItem: {
        textAlignVertical: 'center',
        color: '#5C5C5C',
        fontSize: 12,
    },
   
   
});


