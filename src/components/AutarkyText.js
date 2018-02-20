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