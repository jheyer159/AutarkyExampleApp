import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View,
  Image,
} from 'react-native';

import { material } from 'react-native-typography'


class Autarky extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Text style={styles.display}>Autarky Systems</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            <Text style={styles.subdisplay}>Example App</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
        </View>
      );
    }
  }
  
  export default Autarky;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30
    },
    display: {
        fontSize: 54,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    subdisplay: {
        fontSize: 34,
        //fontWeight: 'bold',
        textAlign: 'center',
    }
  });