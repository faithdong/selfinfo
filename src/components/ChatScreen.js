/*
 * @Author: zhongxd 
 * @Date: 2018-01-23 16:00:20 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-02-01 14:24:50
 */


import React from 'react';
import { View, Text,Button } from 'react-native';

export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
      });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
                <Button

                    onPress={() =>
                        navigate('Three')}

                    title="to to ThreeScreen"

                />
            </View>
        )
    }
}