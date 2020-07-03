import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const DetailsScreen = () => {
    return (
      <View style={style.container}>
        <Text>Details Screen</Text>
        
      </View>
    );
  }

  
  export default DetailsScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })
