import React from 'react';
//import App from './App';
import {
	AppRegistry,
	Text,
	View,
	Button,
	StatusBar,
	ScrollView,
	TextInput,
	StyleSheet
} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import ChatScreen from './src/components/ChatScreen';
import MainVC from './src/components/MainVC';
import FindVC from './src/components/FindVC';
import ReleaseVC from './src/components/ReleaseVC';
import NewsVC from './src/components/NewsVC';
import MineVC from './src/components/MineVC';
import DetailVC from './src/components/DetailVC';
import AddsVC from './src/components/AddsVC';
import ListVC from './src/components/ListVC';


// 通过TabNavigator做路由映射
const MainScreentNavigator = TabNavigator(
	{
		MainVC: { screen: MainVC },
		FindVC: { screen: FindVC },
		ReleaseVC: { screen: ReleaseVC },
		NewsVC: { screen: NewsVC },
		MineVC: { screen: MineVC },
	},
	{
		animationEnabled: true,
		tabBarPosition: 'bottom',
		swipeEnabled: true,
		backBehavior: 'none',
		tabBarOptions: {
			activeTintColor: '#54FF9F',
			activeBackgroundColor :'#54FF9F',
			inactiveTintColor: 'gray',
			showIcon: true,
			indicatorStyle: {
				height: 0,
			},
			style: {
				backgroundColor: 'white',
			},
			tabStyle: {
				backgroundColor: 'white',
			},
			labelStyle: {
				fontSize: 12,
				marginBottom: 8,
				marginTop: 6,
				color:'#393939'
			},
			pressColor: 'gray',
			pressOpacity: 0.8,
			upperCaseLabel: false,
		},
	}
);
//引入要用到的跳转页面
const MyNavigatior = StackNavigator({
	Main: { screen: MainScreentNavigator },
	DetailVC: { screen: DetailVC },
	AddsVC: { screen: AddsVC },
	ListVC:{screen:ListVC}
});



/* class HomeScreen extends React.Component {
	static navigationOptions = {
		//title: 'Welcome',//在导航中显示的标题内容
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>用户名</Text>
				<TextInput></TextInput>
				<Button
					onPress={() => navigation.navigate('Chat')}
					title="Go to Lucy's profile"
				/>
			</View>
		);
	}
} */

//进行导航的注册
/* const App = StackNavigator({
	//App:{screen:App},
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen },
	ThreeScreen:{screen:ThreeScreen},
}); */

AppRegistry.registerComponent('selfinfo', () => MyNavigatior);
//AppRegistry.registerComponent('selfinfo', () => App);
//AppRegistry.registerComponent('selfinfo', () => SimpleApp);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: '#F5FCFF',
	},
	tabBarImage: {
		width: 24,
		height: 24,
		marginTop: 8,
	},
	tabBarIcon: {
		height: 32,
	},

	tabBarLabel: {
		fontSize: 12,
		marginBottom: 8,
		marginTop: 6,
	},
	tabBar: {
		backgroundColor: 'white',
	},

});