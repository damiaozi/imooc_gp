/**
 * Created by penn on 2016/12/19.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    Image,
    View,
    ListView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import Toast, {
    DURATION
} from 'react-native-easy-toast'
import NavigationBar from '../common/NavigationBar'
var data = {
    "result": [{
        "email": "f.lee@taylor.edu",
        "fullName": "张三张三张三张三"
    }, {
        "email": "g.jackson@hall.net",
        "fullName": "张三张三张三张三张三"
    }, {
        "email": "l.hall@rodriguez.com",
        "fullName": "张三张三张三张三"
    }, {
        "email": "q.lopez@davis.io",
        "fullName": "张三张三张三张三"
    }, {
        "email": "c.gonzalez@perez.net",
        "fullName": "张三张三张三"
    }, {
        "email": "a.johnson@williams.net",
        "fullName": "张三张三"
    }, {
        "email": "i.anderson@lopez.edu",
        "fullName": "张三张三"
    }, {
        "email": "r.lee@davis.org",
        "fullName": "张三张三"
    }, {
        "email": "o.young@lee.edu",
        "fullName": "张三张三张三张三张三"
    }, {
        "email": "j.wilson@williams.org",
        "fullName": "张三张三张三张三张三"
    }, {
        "email": "z.walker@jackson.io",
        "fullName": "张三张三"
    }, {
        "email": "j.martinez@brown.gov",
        "fullName": "张三张三张三张三"
    }, {
        "email": "y.martin@lewis.io",
        "fullName": "张三张三张三张三"
    }, {
        "email": "w.taylor@gonzalez.org",
        "fullName": "张三张三"
    }, {
        "email": "j.thomas@garcia.org",
        "fullName": "张三张三张三张三"
    }],
    "statusCode": 0
};
export default class ListViewTest extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 !== r2
            }
        });
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true
        }

    }

    onReload() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })

        }, 2000);
    }

    renderRow(rowData) {
        return (
            <View>
                <TouchableOpacity
                    onPress={()=>{
                        this.toast.show('你单击了,'+rowData.fullName,DURATION.LENGTH_LONG);
                    }}>
                    <Text style={styles.item}>
                        {rowData.fullName}
                    </Text>
                    <Text style={styles.item}>
                        {rowData.email}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderFooter() {
        return <View>
            <Image
                style={{width: 300, height: 100}}
                source={{uri: 'https://images.gr-assets.com/hostedimages/1406479536ra/10555627.gif'}}/>
        </View>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View key={rowID} style={{height: 1, backgroundColor: 'black'}}></View>
    }

    render() {
        return (
            <View>
                <NavigationBar
                 title="ListView使用"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this.renderRow(rowData)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={this.onReload()}
                        />
                    }
                    renderFooter={()=>this.renderFooter()}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                ></ListView>
                <Toast ref={(toast)=>{this.toast=toast}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        height: 40,
        padding: 5
    }
})