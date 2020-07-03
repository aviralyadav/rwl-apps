
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const BookmarkScreen = () => {
    return (
      <View style={style.container}>
        <Text>BookmarkScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => alert('Button Clicked')}
        /> 
      </View>
    );
  }

  export default BookmarkScreen;

  const style = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })