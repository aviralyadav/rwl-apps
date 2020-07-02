import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const ExploreScreen = () => {
    return (
      <View style={style.container}>
        <Text>ExploreScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => alert('Button Clicked')}
        /> 
      </View>
    );
  }

  export default ExploreScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })