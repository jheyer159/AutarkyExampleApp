import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View, 
} from 'react-native';

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Bob',
    icon: 'check-circle',
  },
  {
    title: 'Trey',
    icon: 'do-not-disturb-on',
  },
  {
    title: 'Jeremy',
    icon: 'check-circle'
  },
  {
    title: 'Graeme',
    icon: 'do-not-disturb-on'
  },
  {
    title: 'Sydney',
    icon: 'do-not-disturb-on'
  },
  {
    title: 'Sean',
    icon: 'do-not-disturb-on'
  },
  {
    title: 'Maleah',
    icon: 'check-circle'
  },
  {
    title: 'Nick',
    icon: 'check-circle'
  },
  {
    title: 'Fred',
    icon: 'check-circle'
},
{
    title: 'Paul',
    icon: 'check-circle'
},
];

class SettingsList extends React.Component {
    render(){
        return(
            <View>
                <List>
                    {list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon}}
                        />
                        ))
                    }
                </List>
            </View>
        )
    }
}

export default SettingsList;