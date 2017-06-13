import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Navigator
} from 'react-native';
import NavigationBar from '../common/NavigationBar'
import HomePage from './HomePage'
import ListViewTest from '../../ListViewTest'
export default class WelcomePage extends Component {
	componentDidMount() {
		this.timer = setTimeout(() => {
			this.props.navigator.resetTo({
				component: HomePage,
			})
		}, 2000)
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return <View >
		<NavigationBar 
			title='欢迎'
		/>
		<Text>欢迎</Text> 
		<ListViewTest />
			</View>
	}
}