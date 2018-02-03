import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  ListView,
} from 'react-native';

import { Button, List, ListItem, Card, } from 'react-native-elements';
import Chart from '../components/ChartTest';
import { Measurement, MeasurementContainer } from '../components/Measurements';

import FA from 'react-native-vector-icons/FontAwesome';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Event',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="ticket"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
        <ScrollView style={styles.container}>
          <Text> Events Screen </Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  navIcons: {
    fontSize: 24
  }
});
