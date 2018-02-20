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
import FA from 'react-native-vector-icons/FontAwesome';

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
];

class TTList extends React.Component {
    render(){
        return(
            <View>
                <List containerStyle={{marginBottom: 20}}>
                    {
                    list.map((l, i) => (
                        <ListItem
                            rightIcon={(<FA name="home"/>)}
                            hideChevron="true"
                            roundAvatar
                            avatar={{uri:l.avatar_url}}
                            key={i}
                            title={l.name}
                        />
                    ))
                    }
                </List>
            </View>
        )
    }
}

export default TTList;