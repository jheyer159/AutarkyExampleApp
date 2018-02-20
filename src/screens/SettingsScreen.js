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
import LogoutButton from "../components/LogoutButton";

import FA from 'react-native-vector-icons/FontAwesome';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({tintColor}) => (
      <FA 
        name="cog"
        style={[styles.navIcons, {color: tintColor}]}
      />
    )
  };


  render() {
    return (
        <ScrollView style={styles.container}>
          <LogoutButton />
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
