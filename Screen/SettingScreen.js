
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const SettingScreen = () => {
    return (
      <View style={style.container}>
        <Text>SettingScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => alert('Button Clicked')}
        /> 
      </View>
    );
  }

  export default SettingScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })