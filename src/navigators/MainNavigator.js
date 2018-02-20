import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from "react-navigation";

import ListScreen from "../screens/ListScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";


import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../constants/colors';



export const HomeTabs = TabNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
  Calendar: { screen: CalendarScreen },
  Settings: { screen: SettingsScreen },
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
    headerStyle: {backgroundColor: colors.topbar},
    headerTintColor: 'white',
    /*headerLeft: <Icon style={styles.icon} name="ios-list" onPress={() => 
      navigation.navigate('DrawerToggle')}/> */
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


