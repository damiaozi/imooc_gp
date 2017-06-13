import React, {
  Component,
  PropTypes
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  RefreshControl

} from 'react-native';
import NavigationBar from './NavigationBar'
// import Toast, {
//   DURATION
// } from 'react-native-easy-toast'
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
      isLoadding: true,
    }

  }

  renderRow(item) {
    return <View style={styles.row}>
        <TouchableOpacity >
 
      <Text style={styles.tips}>
          {item.fullName}
      </Text>
      <Text style={styles.tips}>
          {item.email}
      </Text>
   </TouchableOpacity>
    </View>
  }



  render() {

    return (
      <View style={styles.container}>
        
           <ListView 
            dataSource = {
              this.state.dataSource
            }
            renderRow={(item)=>this.renderRow(item)}
            ></ListView>
    
            
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  tips: {
    fontSize: 18,
  },
  row: {

    padding: 5
  },
  line: {
    height: 1,
    backgroundColor: 'black'
  }

});