/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';
import ChatScreen from './src/components/ChatScreen';
import ThreeScreen from './src/components/ThreeScreen';






const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});


export default class App extends Component {
	constructor(props) {
		super(props);
		//this.navigate = this.props.navigation;      
	  }
	static navigationOptions = {
		title: 'Welcome world',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Hello, Navigation!</Text>
				<Button
					onPress={() => navigation.navigate('Chat')}
					title="Go to Lucy's profile"
				/>
			</View>

		);
	}
}

//进行导航的注册
const App = StackNavigator({
	App:{screen:App},
	//Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
	ThreeScreen:{screen:ThreeScreen},
});

AppRegistry.registerComponent('selfinfo', () => App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
