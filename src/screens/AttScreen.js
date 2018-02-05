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
import SettingsList from "../components/Settings";
import AttCount from "../components/AttCount";

import FA from 'react-native-vector-icons/FontAwesome';

export default class AttScreen extends React.Component {
  static navigationOptions = {
    title: 'Attendees',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="users"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
        <ScrollView style={styles.container}>
          <AttCount />
          <SettingsList />
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
  }
});