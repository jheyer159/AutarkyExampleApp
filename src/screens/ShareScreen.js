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
import LogoutButton from "../components/LogoutButton";
import SettingsList from "../components/Settings";
import HeaderNav from '../components/MyHeader';

import FA from 'react-native-vector-icons/FontAwesome';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Share',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="download"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
        <ScrollView style={styles.container}>
            <Text> Share Screen </Text>
        </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
  navIcons: {
    fontSize: 24,
  }
});
