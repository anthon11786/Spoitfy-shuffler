import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Switch, Alert, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


//Adding second screen
export class SongScreen extends React.Component {
  render(){
    return (
      <View>
        <Text> Here is the Song Selection </Text>
        <Button
          title="Go back to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>

    )
  }
}
