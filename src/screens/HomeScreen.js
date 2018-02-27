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
  ImageBackground,
} from 'react-native';

import { Button, List, ListItem, Card, } from 'react-native-elements';
import Chart from '../components/ChartTest';
import { Measurement, MeasurementContainer } from '../components/Measurements';
import Autarky from "../components/AutarkyText"

import FA from 'react-native-vector-icons/FontAwesome';

import AutarkyText from '../components/AutarkyText';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="home"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
      <View>
            <AutarkyText />
      </View> 
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
