
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const SupportScreen = () => {
    return (
      <View style={style.container}>
        <Text>SupportScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => alert('Button Clicked')}
        /> 
      </View>
    );
  }

  export default SupportScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })