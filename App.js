import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Switch } from 'react-native';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour:'',
      minute:'',
      pm:false,
    }
  }

  toggleSwitch = (value) =>{
    this.setState({pm:value})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Enter alarm time</Text>
        <View style={styles.timeContainer}>
          <TextInput
            textAlignVertical='top'
            placeholder="0h"
            onChangeText={(text) => this.setState({hour:text})}
            value={this.state.hour}
          />
          <Text> : </Text>
          <TextInput
            textAlignVertical='top'
            placeholder="0m"
            onChangeText={(text) => this.setState({minute:text})}
            value={this.state.minute}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text textAlignVertical='bottom'>AM</Text>
          <Switch
            onValueChange = {this.toggleSwitch}
            value = {this.state.pm}
          />
          <Text textAlignVertical='top'>PM</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },

});
