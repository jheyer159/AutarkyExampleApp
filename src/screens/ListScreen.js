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
import ListOne from "../components/ListOne";

import FA from 'react-native-vector-icons/FontAwesome';
import TTList from '../components/TTList';
import ListTwo from '../components/ListTwo';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lists',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="list"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Portrait List</Text>
          <ListTwo />
          <Text style={styles.title}>Checked List</Text>
          <ListOne />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navIcons: {
    fontSize: 24
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
    textAlign: 'center',
    paddingVertical: 10,
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  }
});
