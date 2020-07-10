
import React from 'react';
import {View,StyleSheet,Dimensions,Image,ImageBackground,StatusBar} from 'react-native';

const SplashScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
           <StatusBar backgroundColor='#6C3483' barStyle="light-content"/>
        <View style={styles.header}>
        
        <Image 
               
            source={require('./Images/pravah1.png')}
            //style={styles.logo}
            style={{ height: 1000, width: 450 }}
               resizeMode="contain"
            />
             
        </View>
        
       
      </View>
    );
  }

  export default SplashScreen;

  const {height} = Dimensions.get("screen");
  //const height_logo = height * 0.28;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
     
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    logo: {
        width: 30,
        height: 30
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
   
   
   
    
  });