import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from "react-navigation";

import AttScreen from "../screens/AttScreen";
import ShareScreen from "../screens/ShareScreen";
import EventScreen from "../screens/EventScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EventsScreen from "../screens/EventsScreen";
import SubmitScreen from "../screens/SubmitScreen";


import Icon from 'react-native-vector-icons/Ionicons';



const HomeTabs = TabNavigator({
  Events: { screen: EventsScreen },
  Attendees: { screen: AttScreen },
  Event: { screen: EventScreen },
  Share: { screen: ShareScreen },
  Submit: { screen: SubmitScreen },
},


{
  tabBarOptions : {
    inactiveTintColor: 'black',
    activeTintColor: "#417D80",
    style: {
      backgroundColor: "#9EB4C0",
    }
  }
})


const DrawerStack = DrawerNavigator({
  Home: { screen: HomeTabs },
  Profile: { screen: ProfileScreen },
})


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: "#4D658D"},
    title: 'Sign Up Sheet',
    headerTintColor: 'white',
    headerLeft: <Icon style={styles.icon} name="ios-list" onPress={() => 
      navigation.navigate('DrawerToggle')}/>
  })
})


// Sean Working On Settings Nav
/**
const SettingsStack = StackNavigator({
  Logout: { screen: Logout},
  Calibrate: { screen: Calibrate },
  Update: { screen: Update },
})

**/

export default DrawerNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    fontSize: 40,
    paddingLeft: 15
  }
});


