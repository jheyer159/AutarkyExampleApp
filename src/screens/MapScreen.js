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

import { Measurement, MeasurementContainer } from '../components/Measurements';

import FA from 'react-native-vector-icons/FontAwesome';

import MyMapView from '../components/MyMapView';



export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Maps',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="map"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
        <View style={styles.container}>
            <MyMapView />
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
