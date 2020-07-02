
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={style.container}>
        <Text>ProfileScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => alert('Button Clicked')}
        /> 
      </View>
    );
  }

  export default ProfileScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })