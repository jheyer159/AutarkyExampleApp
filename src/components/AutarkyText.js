import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View, 
} from 'react-native';

import { material } from 'react-native-typography'


class Autarky extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Text style={material.display3}>Autarky Systems</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            <Text style={material.display1}>Example App</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            <Text style={material.subHeader}>Thanks for taking the time to look at our example app! If you have any questions please reach out to us at autarkysystems@gmail.com</Text>
        </View>
      );
    }
  }
  
  export default Autarky;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
  });