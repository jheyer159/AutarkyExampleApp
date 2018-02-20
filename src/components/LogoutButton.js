import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import { connect } from 'react-redux';
import { logout } from '../redux/reducers/login.actions';

import { Button } from "react-native-elements";



let LogoutButton = ({dispatch}) => {
    
    return (
        <Button 
        large
        raised
        title="Logout (Return to Login)"
        onPress={() => dispatch(logout())}
        />
    );
}


export default connect()(LogoutButton)