/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 15:39:11 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-02 00:29:09
 */

import React, { Component } from 'react';
import {asEnumerable, Range} from "linq-es2015";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class NewsVC extends Component {

    static navigationOptions = {
        headerTitle: '消息',
        tabBarLabel: '消息',
        tabBarIcon: <View style={{ height: 30, width: 30, backgroundColor: 'red' }}></View>
    };
    componentDidMount(){
        var count =  asEnumerable( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
                       .Where(a => a % 2 == 1)
                       .Count();
        alert(count);
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

