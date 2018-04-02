/*
 * @Author: zhongxd 
 * @Date: 2018-03-30 10:28:14 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-04-03 00:52:49
 * 分类--小类列表
 */

'use strict'

import React from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity ,Alert } from 'react-native';
import { Header, Content, Card, CardItem ,Body,Left,Right ,Col, Row, Grid  } from 'native-base';

export default class ListVC extends React.Component {
    //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    constructor(props) {
        super(props);
        this.state = {
            cgyList: [{ name: '大护法' },
            { name: '绣春刀II：修罗战场' },
            { name: '神偷奶爸3' },
            { name: '神奇女侠' },
            { name: '摔跤吧，爸爸' },
            { name: '悟空传' },
            { name: '闪光少女' },
            { name: '攻壳机动队' },
            { name: '速度与激情8' },
            { name: '蝙蝠侠大战超人' },
            { name: '攻壳机动队' },
            { name: '速度与激情8' },
            { name: '蝙蝠侠大战超人' }]
        };
    };
    viewPwd=({item,index})=>{
        Alert.alert(
            '查看',
            item.name  + '-----' + index,
            [
                {text: '取消'},
            ]
          );
    };
    _renderItem = ({ item, index }) => {
        return (
            <Card>
                <CardItem header style={{ backgroundColor: '#00CE9F',height:30}}>
                    <Text >NativeBase</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Grid>
                            <Col style={{ backgroundColor: '#635DB7'}}><Text>{item.name}</Text></Col>
                            <Col style={{ backgroundColor: '#00CE9F'}}><Text onPress={()=>{this.viewPwd({item,index})}}>{item.name}</Text></Col>
                        </Grid>
                        <Text>{item.name}</Text>
                        <Text>{item.name}</Text>
                    </Body>
                </CardItem>
                <CardItem footer header style={{ backgroundColor: '#00CE9F',height:30}}>
                    <Text >GeekyAnts</Text>
                </CardItem>
            </Card>
        );
    }
    render() {
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
