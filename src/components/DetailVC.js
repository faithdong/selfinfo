/*
 * @Author: zhongxd 
 * @Date: 2018-02-01 15:40:34 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-03-16 00:45:46
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import RealmDB from './RealmDB' 

/* const Realm = require('realm');
// 新建表模型
const PersonSchema = {
    name: 'Person',
    primaryKey: 'id',    // 官方没给出自增长的办法,而且一般不会用到主键,这也解决了重复访问的问题,而且实际开发中我们不需要主键的,让服务端管就是了
    properties: {
        id: 'int',
        name: 'string',
        tel_number: { type: 'string', default: '156xxxxxxxx' },   // 添加默认值的写法
        city: 'string' // 直接赋值的方式设置类型
    }
};
//初始化Realm
let realm = new Realm({ schema: [PersonSchema] });
 */

export default class DetailVC extends Component {
    //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    // 点击返回上一页方法
    backVC = () => {
        //返回首页方法
        this.props.navigation.goBack();
    };
    onPressLearnMore(e) {
        console.log(e);
        console.log('Learn more about this purple button');
    };
    onPressIn() {
        alert('按下');
    };
    onPressOut() {
        alert('抬起')
    };
    onLongPress() {
        alert('长点击');
    };
    onPressCallback = () => {
        alert('点击了按钮');
    };
    createData() {
        /* realm.write(() => {
            realm.create('Person', { id: 0, name: '吉泽明步', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx' });
            realm.create('Person', { id: 1, name: '苍井空', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx' });
            realm.create('Person', { id: 2, name: '小泽玛利亚', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx' });
            realm.create('Person', { id: 3, name: '皮皮虾我们走', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx' });
            realm.create('Person', { id: 4, name: '波多野结衣', tel_number: '137xxxxxxxx', city: 'xx省xx市xxxxxx' });
        }); */
        /* console.log(RealmDB.defaultPath);
        RealmDB.open({schema:[AccountInfoSchema]}).then(realmDB => {
            realmDB.write( () => {
                realmDB.create('AccountInfo',{account_name:'百度',login_name_one:'faithdong',login_name_two:'zhongxd',login_pwd:'123'});
            });
            realmDB.close();
        }) */
        RealmDB.write( () => {
            RealmDB.create('AccountInfo',{account_name:'ceshi',login_name_one:'faithdong',login_name_two:'zhongxd',login_pwd:'123'});
        });
    };
    delData() {
        realm.write(() => {
            // 获取Person对象
            let Persons = realm.objects('Person');
            // 删除
            realm.delete(Persons);
        })
    };
    qryAllData() {
        // 查询所有数据
        debugger;
        let persons = realm.objects('Person');
        alert('name:' + persons[0].name + 'city:' + persons[0].city);
        console.log('name:' + persons[0].name + 'city:' + persons[0].city);
        console.log(persons);
    };
    contdionData() {
        // 获取Person对象
        let Persons = realm.objects('Person');
        // 设置筛选条件
        let person = Persons.filtered('id == 0');
        console.log(person[0].name);
    };
    upData() {
        realm.write(() => {
            // 方式一
            realm.create('Person', { id: 0, name: '皮皮虾,我们走', tel_number: '156xxxxxxxx', city: 'xx省xx市xxxxxx' }, true);

            // // 方式二:如果表中没有主键,那么可以通过直接赋值更新对象
            // // 获取Person对象
            // let Persons = realm.objects('Person');
            // // 设置筛选条件
            // let person = Persons.filtered('name == 苍井空');
            // // 更新数据
            // person.name = '黄鳝门'

        })
    };
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ScrollView >
                <View style={styles.container}>
                    <TouchableOpacity style={{
                        height: 40,
                        backgroundColor: 'green',
                        justifyContent: 'center'
                    }}
                        onPress={() => { this.backVC() }}>
                        <Text>{this.props.navigation.state.params.des}</Text>
                    </TouchableOpacity>
                    <Button
                        onPress={this.onPressLearnMore}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <TouchableHighlight
                        style={styles.touchables}
                        underlayColor='green'
                        activeOpacity={0.7}
                        onPressIn={this.onPressIn}
                        onPressOut={this.onPressOut}
                        onLongPress={this.onLongPress}
                        onPress={this.onPressCallback}
                    >
                        <Text style={styles.touchablesText}>TouchableHighlight</Text>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.touchables}
                        onPress={this.onPressCallback}
                    >
                        <Text style={styles.touchablesText}>TouchableOpacity</Text>
                    </TouchableOpacity>
                    <TouchableNativeFeedback
                        onPress={this.onPressCallback}
                        background={TouchableNativeFeedback.SelectableBackground()}
                    >
                        <View style={styles.touchables}>
                            <Text style={styles.touchablesText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback
                        onPress={this.onPressCallback}
                        background={TouchableNativeFeedback.SelectableBackground()}
                    >
                        <View style={styles.touchables}>
                            <Text style={styles.touchablesText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableOpacity
                        style={styles.touchableData}
                        onPress={this.createData}>
                        <Text style={styles.touchablesText}>新增</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            margin: 10,
                            backgroundColor: 'red',
                            width: 250,
                            height: 50,
                            borderRadius: 20,
                            justifyContent: 'center',
                        }}
                        onPress={this.delData}>
                        <Text style={styles.touchablesText}>删除</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableData}
                        onPress={this.qryAllData}>
                        <Text style={styles.touchablesText}>查询所有</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableData}
                        onPress={this.contdionData}>
                        <Text style={styles.touchablesText}>条件查询</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableData}
                        onPress={this.upData}>
                        <Text style={styles.touchablesText}>修改</Text>
                    </TouchableOpacity>
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
    touchablesText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    touchables: {
        margin: 10,
        backgroundColor: 'blue',
        width: 250,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
    },
    touchableData: {
        margin: 10,
        backgroundColor: 'orange',
        width: 250,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
    },
});

