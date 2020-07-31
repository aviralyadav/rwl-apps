import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
import TimePicker from 'react-native-simple-time-picker';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 10,
    width: '45%',
    color: '#344953',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:"green"

  },
});
 
export default class Profile extends Component {
  state = {
    selectedHours: 0,
    selectedMinutes: 0,
  }
 
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={styles.container}>
        <Text>{selectedHours}:{selectedMinutes}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
      </View>
    );
  }
}