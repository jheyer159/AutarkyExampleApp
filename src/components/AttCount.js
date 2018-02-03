import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View, 
} from 'react-native';


class AttCount extends Component {
  render() {
    return (
      <View>
          
          <Text style={styles.count}> Total Attendees: 1,249</Text>
        </View>
    );
  }
}

export default AttCount;

const styles = StyleSheet.create({
    count: {
      //backgroundColor: 'darkgrey',
      color: 'darkred',
      marginTop: 20,
      fontSize: 24,
      flex: 1,
    },
    navIcons: {
      fontSize: 24
    }
  });