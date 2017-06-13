import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import ScrollableTabView, {
    ScrollableTabBar
} from 'react-native-scrollable-tab-view'
import NavigationBar from '../../NavigationBar'
import DataRepository from '../expand/dao/DataRepository'
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: ''
        }
    }
    onLoad() {
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }
    genUrl(key) {
        return URL + key + QUERY_STR;
    }

    render() {
        return <View style={styles.container}>
             <NavigationBar 
                title={'最热'}
                style={{backgroundColor:'#6495ED'}}
            />
       
            <Text onPress={()=>{
                this.onLoad()
            }} style={styles.tips}>获取数据</Text> 
            <TextInput 
                style={{height:40,borderWidth:1}}
                onChangeText={text=>this.text=text}
            />
            <Text style={{height:500}}>结果是:{this.state.result}</Text>
  {/* 
<ScrollableTabView>
<Text tabLabel="java">JAVA</Text>
<Text tabLabel="ios">IOS</Text>
<Text tabLabel="android">android</Text>
<Text tabLabel="js">JS</Text>
</ScrollableTabView>
     */}
              </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tips: {
        fontSize: 29
    },

});