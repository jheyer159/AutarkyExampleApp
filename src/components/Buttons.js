import React, { Component } from 'react';

import { 
    ScrollView,
    StyleSheet,
    Platform,
    Text,
    Dimensions,
    View,
    Image,
    Styles,
  } from 'react-native';

import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';
import { PricingCard } from 'react-native-elements';



class Buttons extends Component {
    render() {
      return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Social Buttons</Text>
            <SocialIcon style={styles.buttonSpacing}
            title='Sign In With Facebook'
            button
            type='facebook'
            />

            <SocialIcon style={styles.buttonSpacing}
            title='Twitter'
            button
            type='twitter'
            />

            <SocialIcon style={styles.buttonSpacing}
            button
            type='medium'
            />

            <SocialIcon
            button
            light
            type='instagram'
            title="Instagram"
            touchableOpacity="true"
            />

            <Text></Text>
            <Text></Text>

            <Text style={styles.title}>Square Buttons</Text>

            <Text></Text>
            <Text></Text>

            <Button
            title='BUTTON'
            backgroundColor="blue"
            />

            <Text></Text>

            <Button
            raised
            icon={{name: 'cached'}}
            title='BUTTON WITH ICON' 
            backgroundColor="green"
            />

            <Text></Text>

            <Button
            large
            iconRight={{name: 'code'}}
            title='LARGE WITH RIGHT ICON' 
            backgroundColor="red"
            />

            <Text></Text>

            <Button
            large
            icon={{name: 'envira', type: 'font-awesome'}}
            title='LARGE WITH ICON TYPE' 
            backgroundColor="purple"
            />

            <Text></Text>
            <Text></Text>

            <Text style={styles.title}>Pricing Buttons</Text>

            <Text></Text>

            <PricingCard
            color='#4f9deb'
            title='Free'
            price='$0'
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
            />


            <Text></Text>
            <Text></Text>

          </ScrollView>
      );
    }
  }

  export default Buttons;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    buttonSpacing: {
      paddingVertical: 100,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 4,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'black',
      textAlign: 'center',
      borderColor: '#bbb',
      padding: 10,
      backgroundColor: '#eee'
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