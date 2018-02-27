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

//Component
import Buttons from '../components/Buttons';

//React Elements
import { Button, List, ListItem, Card } from 'react-native-elements';

//Icons
import FA from 'react-native-vector-icons/FontAwesome';


export default class ButtonScreen extends React.Component {
  static navigationOptions = {
    title: 'Buttons',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="bold"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };

  render() {
    return (
        <Buttons />
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    color: 'red',
  },
  description: {
    fontSize: 16.
  },
  navIcons: {
    fontSize: 24,
  }
});