import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={style.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> 
      </View>
    );
  }

  export default HomeScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })