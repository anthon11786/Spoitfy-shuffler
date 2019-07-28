import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Switch, Alert } from 'react-native';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour:'',
      minute:'',
      pm:false,
    }
  }

  toggleSwitch = value =>{
    this.setState({pm:value});
  }

  hourSet = text =>{
    numbers = new Set(['','1','2','3','4','5','6','7','8','9','10','11','12']);
    if(numbers.has(text)){
      this.setState({hour:text});
    }
    else {
      Alert.alert(
        'Invalid Hour Time',
        'Enter a number between 1 and 12.');
    }
  }

  minuteSet = text =>{
    var re = /[0-5][0-9]/;
    if(text.length == 2 && re.test(text) || text.length<2){
      this.setState({minute:text});
    }else{
      Alert.alert(
        'Invalid Minute Time',
        'Enter a number between 0 and 59.');
      this.setState({minute:''});
    }
  }



  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30, fontStyle:'italic'}} >Enter alarm time</Text>
        <View style={styles.timeContainer}>
          <TextInput
            textAlignVertical='top'
            keyboardType = 'numeric'
            fontSize='30'
            placeholder="0h"
            onChangeText={(text) => this.hourSet(text)}
            value={this.state.hour}
          />
          <Text style = {{fontSize:30}}> : </Text>
          <TextInput
            textAlignVertical='top'
            keyboardType = 'numeric'
            fontSize='30'
            placeholder="0m"
            onChangeText={(text) => this.minuteSet(text)}
            value={this.state.minute}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text textAlign='right' style={{color:'red'}}>AM</Text>
          <Switch
            onValueChange = {this.toggleSwitch}
            value = {this.state.pm}
            trackColor = {{
              false: 'red',
              true: 'blue'
            } }
            ios_backgroundColor = 'red'
          />
          <Text textAlignVertical='center' style={{color:'blue'}}>PM</Text>
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
    justifyContent: 'space-around',
  },
  timeContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  AMPMContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent: 'space-between',
    fontSize:30,


  }

});
