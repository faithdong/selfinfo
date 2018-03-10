/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 15:37:11 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-10 14:58:09
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
import Images from '../images/ImageList'


let Dimensions = require('Dimensions');//获取屏幕的宽高
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
let homeImages = require('../images/icon_contacts_line_light.png');
let addImages = require('../images/icon_right_add.png');


export default class MainVC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sectListDataSource_row: [
                {
                    key: "A",
                    title:'社保卡公积金',
                    data: [{ name: '成都社保卡', img: Images.oaWQQD,key:1},
                        { name: '上海社保卡', img: Images.oaWQQD,key:2},
                        { name: '成都公积金', img: Images.oaWQQD,key:3},
                        { name: '上海公积金', img: Images.oaWQQD,key:4}]
                },
                {
                    key: "B",
                    title:'保险',
                    data: [{ name: '车险', img: Images.oaKQDK,key:5},{ name: '中宏保险', img: Images.oaKQDK,key:6}]

                },
            ],
            isLoading: true,
        };
        
    }

    componentDidMount() {
        console.log("Component挂载完毕后调用");
        this.props.navigation.setParams({navigatePress:this.headerRightTest})
    };

    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: '首页',//对页面的配置
        headerTintColor: '#393939',
        headerRight:(
            <Text  onPress={()=>navigation.state.params.navigatePress()} style={{ width:30, textAlign:"center"}} >  
                <Image  source={addImages} size={24} />  
            </Text>  
        ),
        headerTitleStyle: {
            alignSelf: 'center'
        },
        tabBarLabel: '重要',
        tabBarIcon: <Image source={homeImages} /> 
    });
    headerRightTest = ()=>{
        let {navigate} = this.props.navigation;
        navigate('AddsVC', { title: '新增', des: '我是返回点击我' });
    };
    itemClick=(item) =>{
        debugger;
        console.log(item);
    };
    getColor(){
         //定义字符串变量colorValue存放可以构成十六进制颜色值的值
         var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
         //以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
         var colorArray = colorValue.split(",");
          var color="#";//定义一个存放十六进制颜色值的字符串变量，先将#存放进去
           //使用for循环语句生成剩余的六位十六进制值
          for(var i=0;i<6;i++){
               //colorArray[Math.floor(Math.random()*16)]随机取出
              // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
              //字符串相加后，得出的仍是字符串
               color+=colorArray[Math.floor(Math.random()*16)];
          }
          return color;
    };
     _renderSectionHeader = ({ section }) => (
        <View>
            <Text style={styles.viewItemHeader}>{section.title}</Text>
            <FlatList
                data={section.data}
                style={styles.flastList}
                numColumns={3}
                renderItem={({ item }) =>
                 <TouchableOpacity onPress={() => {this.itemClick(item)}}>
                     <View style={styles.viewRow}>  
                        {/*  <Image source={item.img} style={styles.imageItem}/>
                         <Text style={styles.textItem}>{item.name}</Text> */}
                         <Button
                            title="Learn More"
                            color={this.getColor()}
                            accessibilityLabel={item.name}
                            />
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
        width: ScreenWidth / 3,
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


