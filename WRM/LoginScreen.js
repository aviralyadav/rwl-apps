import React, {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';

export default class LoginScreen extends Component {
  onPress() {}
  render() {
    return (
      <View style={styles.container}>
     
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./Images/2.jpg')}>
          
          <View>
            <View style={styles.logoContainer}>
              <Image
                source={require('./Images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Image
                source={require('./Images/logo-text.png')}
                style={styles.logoText}
                resizeMode="contain"
              />
            </View>
            <View style={styles.signupForm}>
             
             
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 25,
                }}>
                <LinearGradient
                  colors={['#7b4397', '#dc2430']}
                  style={styles.buttonWrapper}>
                  <TouchableWithoutFeedback
                    style={styles.button1}
                    onPress={this.onPress}>
                    <Text style={styles.button}>LOGIN WRD USER</Text>
                  </TouchableWithoutFeedback>
                </LinearGradient>
                
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 50,
                }}>
                <LinearGradient
                  colors={['#7b4397', '#dc2430']}
                  style={styles.buttonWrapper}>
                  <TouchableWithoutFeedback
                    style={styles.button1}
                    onPress={this.onPress}>
                    <Text style={styles.button}>LOGIN CITIZEN</Text>
                  </TouchableWithoutFeedback>
                </LinearGradient>
                
              </View>
              
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 25,
                }}>
                <Text
                  style={{
                    color: 'yellow',
                    textDecorationLine: 'underline',
                    fontWeight: '900',
               
                  }}>
                  New Citizen User?
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 90,
                }}>
                <Text
                  style={{
                    color: 'white',
                   fontSize:18
                    // fontWeight: '900',
               
                  }}>
                  Language Change
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 50,
                }}>
                <LinearGradient
                  colors={['#7b4397', '#dc2430']}
                  style={styles.buttonWrapper1}>
                  <TouchableWithoutFeedback
                    style={styles.button1}
                    onPress={this.onPress}>
                    <Text style={styles.button}>MARATHI</Text>
                  </TouchableWithoutFeedback>
                </LinearGradient>
                
              </View>
            </View>
          </View>
          
        

          {/* <LinearGradient colors={['#7b4397', '#dc2430']} style={styles.footer}>
            <Text style={styles.footerText}>
              Designed and developed by Mechatronics Systems Pvt. Ltd.
            </Text>
          </LinearGradient> */}
        </ImageBackground>
      <View>
        <Footer/>
      </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    // height: 1100,
    // width: '100%'
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "orange"
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    // height: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    // alignItems: "center",
    // opacity: 0.7,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    paddingTop: 50,
  },
  logo: {height: 65, width: 70},
  logoText: {height: 70, width: '75%'},
  footer: {
    // backgroundColor: linearGradient('#fdcc52', '#fdc539'),
    padding: 9,
  },
  signupForm: {
    paddingTop: 10,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 60,
    borderRadius: 45,
    margin: 10,
  },

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textInput: {flex: 1, color: '#000', fontSize: 20, fontWeight: '600'},
  buttonWrapper: {
    alignItems: 'center',
    // flexDirection: 'row',
    width: '75%',
    borderRadius: 30,
  },
  button: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    padding: 14,
  },
  buttonWrapper1: {
    alignItems: 'center',
    // flexDirection: 'row',
    width: '50%',
    borderRadius: 30,
  },
 
};
