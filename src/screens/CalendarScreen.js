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


import { Button, List, ListItem, Card } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CalendarsScreen from '../components/Calendar';

import FA from 'react-native-vector-icons/FontAwesome';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendars',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="calendar"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };

  render() {
    return (
        <CalendarsScreen />
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    paddingVertical: 30,
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